/**
 * ESLint rule: Disallow empty files or files containing only whitespace/comments without any AST body.
 */

const rule = {
    meta: {
        type: 'problem',
        docs: {
            description: 'Disallow empty files or files with no statements, exports, or declarations',
        },
        schema: [],
        messages: {
            noEmptyFile: 'Empty files are not allowed. Delete this file if it is unused, or add implementation/declarations.',
        },
    },
    create(context) {
        return {
            Program(node) {
                const filename = context.filename ?? (context.getFilename ? context.getFilename() : '');
                if (filename.endsWith('.d.ts')) return;

                const sourceCode = context.sourceCode ?? (context.getSourceCode ? context.getSourceCode() : null);
                const text = sourceCode ? sourceCode.getText().trim() : '';

                if (!text || !node.body || node.body.length === 0) {
                    context.report({
                        node,
                        messageId: 'noEmptyFile',
                    });
                }
            },
        };
    },
};

export default rule;
