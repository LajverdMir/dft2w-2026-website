/**
 * ESLint rule: avoid comments inside JSX.
 * e.g., `{/* comment *\/}` inside JSX elements/fragments.
 */
const rule = {
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Disallow comments inside JSX markup',
        },
        schema: [],
        messages: {
            noJsxComments: 'Avoid comments inside JSX markup. Move explanations to the component header or colocated hook.',
        },
    },
    create(context) {
        const sourceCode = context.sourceCode ?? context.getSourceCode();

        return {
            JSXExpressionContainer(node) {
                if (node.expression?.type === 'JSXEmptyExpression') {
                    const comments = sourceCode.getCommentsInside ? sourceCode.getCommentsInside(node) : [];
                    if (comments.length > 0) {
                        context.report({
                            node,
                            messageId: 'noJsxComments',
                        });
                    }
                }
            },
        };
    },
};

export default rule;
