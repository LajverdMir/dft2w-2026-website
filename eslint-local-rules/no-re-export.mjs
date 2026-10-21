/**
 * ESLint rule: disallow re-exporting.
 * e.g., `export { X } from './x';`, `export * from './x';`
 * or `import { X } from './x'; export { X };`
 */
const rule = {
    meta: {
        type: 'problem',
        docs: {
            description: 'Disallow re-exporting modules (importing a symbol and exporting it again)',
        },
        schema: [],
        messages: {
            noReExport: 'Re-exporting is not allowed. Consumers should import directly from the source.',
        },
    },
    create(context) {
        return {
            // export { x } from './foo'
            ExportNamedDeclaration(node) {
                if (node.source) {
                    context.report({
                        node,
                        messageId: 'noReExport',
                    });
                } else {
                    // Check if it's exporting something that was imported
                    for (const specifier of node.specifiers) {
                        const localName = specifier.local?.name;
                        if (!localName) continue;
                        const sourceCode = context.sourceCode ?? context.getSourceCode();
                        const scope = sourceCode.getScope ? sourceCode.getScope(node) : context.getScope();
                        const variable = scope?.set?.get(localName);
                                         
                        if (variable && variable.defs.some((def) => def.type === 'ImportBinding')) {
                            context.report({
                                node: specifier,
                                messageId: 'noReExport',
                            });
                        }
                    }
                }
            },
            // export * from './foo'
            ExportAllDeclaration(node) {
                context.report({
                    node,
                    messageId: 'noReExport',
                });
            },
        };
    },
};

export default rule;
