/**
 * ESLint rule: Restrict relative import/export paths to a maximum depth of 1 level (../).
 * Any deeper relative navigation (../../) must use alias imports (@/...).
 */

const rule = {
    meta: {
        type: 'suggestion',
        docs: {
            description:
                'Restrict relative imports to a maximum depth of 1 level (../). Use alias (@/...) for deeper paths.',
        },
        schema: [],
        messages: {
            tooDeep:
                'Relative import depth cannot exceed 1 level ("../"). Use the "@/" path alias instead of "{{source}}".',
        },
    },
    create(context) {
        const checkSource = (node) => {
            const source = node.source?.value;
            if (typeof source === 'string' && (source.startsWith('../../') || source === '../..' || /\.\.\/\.\./.test(source))) {
                context.report({
                    node: node.source,
                    messageId: 'tooDeep',
                    data: {
                        source,
                    },
                });
            }
        };

        return {
            ImportDeclaration: checkSource,
            ExportNamedDeclaration: checkSource,
            ExportAllDeclaration: checkSource,
            ImportExpression(node) {
                if (node.source?.type === 'Literal' && typeof node.source.value === 'string') {
                    const source = node.source.value;
                    if (source.startsWith('../../') || source === '../..' || /\.\.\/\.\./.test(source)) {
                        context.report({
                            node: node.source,
                            messageId: 'tooDeep',
                            data: {
                                source,
                            },
                        });
                    }
                }
            },
        };
    },
};

export default rule;
