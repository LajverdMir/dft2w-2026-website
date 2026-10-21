/**
 * ESLint rule: a .tsx file may have only one module-level function,
 * and that function must be the component. Helpers belong in *.utils.ts
 * or a nested component file.
 */

const NEXTJS_SPECIAL_EXPORTS = new Set([
    'metadata',
    'generateMetadata',
    'viewport',
    'generateViewport',
    'dynamic',
    'dynamicParams',
    'revalidate',
    'fetchCache',
    'runtime',
    'preferredRegion',
    'maxDuration',
    'generateStaticParams',
    'experimental_ppr',
    'size',
    'contentType',
    'alt',
]);

const WRAPPER_NAMES = new Set(['memo', 'forwardRef']);

const NEXTJS_SPECIAL_FILENAMES = new Set([
    'page',
    'layout',
    'template',
    'loading',
    'error',
    'global-error',
    'not-found',
    'route',
    'default',
    'middleware',
    'instrumentation',
    'icon',
    'apple-icon',
    'opengraph-image',
    'twitter-image',
]);

const isIgnoredFile = (filename) => {
    const normalized = filename.replaceAll('\\', '/');
    if (!normalized.endsWith('.tsx')) return true;
    if (normalized.includes('/src/components/ui/')) return true;
    if (/\.(test|spec|stories)\.tsx$/.test(normalized)) return true;
    const basename = (normalized.split('/').pop() || '').replace(/\.tsx$/, '');
    if (NEXTJS_SPECIAL_FILENAMES.has(basename)) return true;
    return false;
};

const isPascalCase = (name) =>
    typeof name === 'string' && /^[A-Z][a-zA-Z0-9]*$/.test(name);

const isModuleLevel = (node) => {
    let current = node.parent;
    while (current) {
        if (current.type === 'Program') return true;
        if (
            current.type === 'ExportNamedDeclaration' ||
            current.type === 'ExportDefaultDeclaration' ||
            current.type === 'VariableDeclaration'
        ) {
            current = current.parent;
            continue;
        }
        return false;
    }
    return false;
};

const getCalleeName = (call) => {
    if (call.callee?.type === 'Identifier') return call.callee.name;
    if (
        call.callee?.type === 'MemberExpression' &&
        call.callee.object?.name === 'React' &&
        call.callee.property?.type === 'Identifier'
    ) {
        return call.callee.property.name;
    }
    return null;
};

const unwrapFunctionInit = (init) => {
    let current = init;
    while (current?.type === 'CallExpression') {
        const name = getCalleeName(current);
        if (!WRAPPER_NAMES.has(name) || !current.arguments?.[0]) break;
        current = current.arguments[0];
    }
    if (
        current?.type === 'ArrowFunctionExpression' ||
        current?.type === 'FunctionExpression'
    ) {
        return current;
    }
    return null;
};

const containsJsx = (node) => {
    let found = false;
    const walk = (n) => {
        if (!n || found) return;
        if (n.type === 'JSXElement' || n.type === 'JSXFragment') {
            found = true;
            return;
        }
        for (const key of Object.keys(n)) {
            if (key === 'parent' || key === 'leadingComments' || key === 'trailingComments') {
                continue;
            }
            const child = n[key];
            if (Array.isArray(child)) {
                for (const c of child) {
                    if (c && typeof c.type === 'string') walk(c);
                }
            } else if (child && typeof child.type === 'string') {
                walk(child);
            }
        }
    };
    walk(node);
    return found;
};

const isComponentFn = (fnNode, name) =>
    Boolean(isPascalCase(name) || containsJsx(fnNode));

const rule = {
    meta: {
        type: 'problem',
        docs: {
            description:
                'Allow only one module-level function in a .tsx file (the component)',
        },
        schema: [],
        messages: {
            extraRootFunction:
                'A .tsx file may have only one function at module scope (the component). Move "{{name}}" to a colocated *.utils.ts file or its own component file.',
            rootMustBeComponent:
                'The only module-level function in a .tsx file must be the component. Move "{{name}}" to a colocated *.utils.ts file.',
        },
    },
    create(context) {
        const filename = context.filename ?? context.getFilename();
        if (isIgnoredFile(filename)) return {};

        const rootFunctions = [];

        const register = (node, name, fnNode) => {
            if (!isModuleLevel(node)) return;
            if (NEXTJS_SPECIAL_EXPORTS.has(name)) return;
            rootFunctions.push({
                node,
                name: name || 'anonymous',
                isComponent: isComponentFn(fnNode, name),
            });
        };

        return {
            FunctionDeclaration(node) {
                register(node, node.id?.name, node);
            },
            VariableDeclarator(node) {
                const fnNode = unwrapFunctionInit(node.init);
                if (!fnNode) return;
                const name = node.id?.type === 'Identifier' ? node.id.name : undefined;
                register(node, name, fnNode);
            },
            ExportDefaultDeclaration(node) {
                const decl = node.declaration;
                if (
                    decl?.type === 'ArrowFunctionExpression' ||
                    decl?.type === 'FunctionExpression'
                ) {
                    register(node, decl.id?.name || 'default', decl);
                }
            },
            'Program:exit'() {
                if (rootFunctions.length === 0) return;

                if (rootFunctions.length === 1) {
                    const only = rootFunctions[0];
                    if (!only.isComponent) {
                        context.report({
                            node: only.node,
                            messageId: 'rootMustBeComponent',
                            data: { name: only.name },
                        });
                    }
                    return;
                }

                const componentIndex = rootFunctions.findIndex((item) => item.isComponent);
                const keepIndex = componentIndex === -1 ? 0 : componentIndex;

                for (let i = 0; i < rootFunctions.length; i += 1) {
                    if (i === keepIndex) continue;
                    context.report({
                        node: rootFunctions[i].node,
                        messageId: 'extraRootFunction',
                        data: { name: rootFunctions[i].name },
                    });
                }
            },
        };
    },
};

export default rule;
