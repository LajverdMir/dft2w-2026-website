/**
 * ESLint rule: Only one React component per .tsx file.
 * Any secondary component should be moved into its own file.
 */

const isIgnoredFile = (filename) => {
    const normalized = filename.replaceAll('\\', '/');
    if (!normalized.endsWith('.tsx')) return true;
    if (normalized.includes('/src/components/ui/')) return true;
    if (/\.(test|spec|stories)\.tsx$/.test(normalized)) return true;
    return false;
};

const isPascalCase = (name) => typeof name === 'string' && /^[A-Z][a-zA-Z0-9]*$/.test(name);

const containsJsx = (node) => {
    let found = false;
    const walk = (n) => {
        if (!n || found) return;
        if (n.type === 'JSXElement' || n.type === 'JSXFragment') {
            found = true;
            return;
        }
        for (const key of Object.keys(n)) {
            if (key === 'parent' || key === 'leadingComments' || key === 'trailingComments') continue;
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

const isReactComponentNode = (node, name) => {
    if (!name && node.parent?.type === 'ExportDefaultDeclaration') {
        return containsJsx(node);
    }
    if (isPascalCase(name)) {
        return containsJsx(node);
    }
    return false;
};

const rule = {
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Enforce at most one React component per .tsx file',
        },
        schema: [],
        messages: {
            oneComponentPerFile:
                'Only one component is allowed per .tsx file (found {{count}} components, including "{{name}}"). Move secondary components into separate files.',
        },
    },
    create(context) {
        const filename = context.filename ?? context.getFilename();
        if (isIgnoredFile(filename)) return {};

        const seenComponents = [];

        const registerComponent = (node, name) => {
            seenComponents.push({ node, name: name || 'AnonymousComponent' });
            if (seenComponents.length > 1) {
                context.report({
                    node,
                    messageId: 'oneComponentPerFile',
                    data: {
                        count: String(seenComponents.length),
                        name: name || 'AnonymousComponent',
                    },
                });
            }
        };

        return {
            FunctionDeclaration(node) {
                const name = node.id?.name;
                if (isReactComponentNode(node, name)) {
                    registerComponent(node, name);
                }
            },
            VariableDeclarator(node) {
                const name = node.id?.name;
                if (!isPascalCase(name)) return;
                const init = node.init;
                if (!init) return;

                if (
                    init.type === 'ArrowFunctionExpression' ||
                    init.type === 'FunctionExpression'
                ) {
                    if (isReactComponentNode(init, name)) {
                        registerComponent(node, name);
                    }
                } else if (
                    init.type === 'CallExpression' &&
                    (init.callee?.name === 'memo' ||
                        init.callee?.name === 'forwardRef' ||
                        (init.callee?.type === 'MemberExpression' &&
                            init.callee.object?.name === 'React' &&
                            (init.callee.property?.name === 'memo' || init.callee.property?.name === 'forwardRef')))
                ) {
                    registerComponent(node, name);
                }
            },
            ExportDefaultDeclaration(node) {
                const decl = node.declaration;
                if (!decl) return;
                if (
                    decl.type === 'ArrowFunctionExpression' ||
                    decl.type === 'FunctionExpression'
                ) {
                    const name = decl.id?.name;
                    if (isReactComponentNode(decl, name)) {
                        registerComponent(node, name || 'DefaultExport');
                    }
                }
            },
        };
    },
};

export default rule;
