/**
 * ESLint rule: the React component in a .tsx file must be a const arrow
 * function (`const Foo = () => {}`), not a function declaration or
 * function expression.
 */

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
        type: 'suggestion',
        docs: {
            description: 'Require React components to be defined as arrow functions',
        },
        schema: [],
        messages: {
            useArrow:
                'Define the component as a const arrow function (`const {{name}} = () => {}`). Function declarations and `function` expressions are not allowed.',
        },
    },
    create(context) {
        const filename = context.filename ?? context.getFilename();
        if (isIgnoredFile(filename)) return {};

        const reportIfComponent = (node, name, fnNode) => {
            if (!isModuleLevel(node)) return;
            if (!isComponentFn(fnNode, name)) return;
            if (fnNode.type === 'ArrowFunctionExpression') return;
            context.report({
                node,
                messageId: 'useArrow',
                data: { name: name || 'Component' },
            });
        };

        return {
            FunctionDeclaration(node) {
                reportIfComponent(node, node.id?.name, node);
            },
            ClassDeclaration(node) {
                if (!isModuleLevel(node)) return;
                const name = node.id?.name;
                if (!isPascalCase(name) && !containsJsx(node.body)) return;
                context.report({
                    node,
                    messageId: 'useArrow',
                    data: { name: name || 'Component' },
                });
            },
            VariableDeclarator(node) {
                const fnNode = unwrapFunctionInit(node.init);
                if (!fnNode) return;
                const name = node.id?.type === 'Identifier' ? node.id.name : undefined;
                reportIfComponent(node, name, fnNode);
            },
            ExportDefaultDeclaration(node) {
                const decl = node.declaration;
                if (
                    decl?.type === 'ArrowFunctionExpression' ||
                    decl?.type === 'FunctionExpression'
                ) {
                    reportIfComponent(node, decl.id?.name || 'default', decl);
                }
            },
        };
    },
};

export default rule;
