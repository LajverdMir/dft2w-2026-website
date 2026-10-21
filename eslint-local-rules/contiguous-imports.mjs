/**
 * ESLint rule: all imports must be contiguous at the top of the file
 * (after any 'use client' / 'use server' directive), with no empty lines
 * and no variable declarations or other statements in between.
 */

const isDirective = (node) => {
    if (!node) return false;
    if (node.type === 'ExpressionStatement' && node.expression?.type === 'Literal') {
        const val = node.expression.value;
        return val === 'use client' || val === 'use server';
    }
    return false;
};

const rule = {
    meta: {
        type: 'layout',
        docs: {
            description:
                'Require all imports to be collectively at the top with no empty lines or interleaved code between them.',
        },
        fixable: 'code',
        schema: [],
        messages: {
            notAtTop:
                'All imports must be placed collectively at the top of the file.',
            interleaved:
                'Keep all imports together; do not place variable declarations, statements, or other code between imports.',
            emptyLines:
                'Imports must be contiguous with no empty lines between them.',
        },
    },
    create(context) {
        const sourceCode = context.sourceCode ?? context.getSourceCode();

        return {
            Program(program) {
                const body = program.body;
                const importNodes = body.filter(
                    (node) => node.type === 'ImportDeclaration'
                );
                if (importNodes.length === 0) return;

                // Find starting position (ignoring leading directives like 'use client')
                let firstAllowedIndex = 0;
                while (firstAllowedIndex < body.length && isDirective(body[firstAllowedIndex])) {
                    firstAllowedIndex += 1;
                }

                const firstImportIndex = body.indexOf(importNodes[0]);
                const lastImportIndex = body.indexOf(importNodes[importNodes.length - 1]);

                let notAtTop = firstImportIndex > firstAllowedIndex;
                let interleaved = false;

                for (let i = firstImportIndex; i <= lastImportIndex; i += 1) {
                    if (body[i].type !== 'ImportDeclaration') {
                        interleaved = true;
                        break;
                    }
                }

                let hasEmptyLines = false;
                for (let i = 1; i < importNodes.length; i += 1) {
                    const prev = importNodes[i - 1];
                    const curr = importNodes[i];
                    const textBetween = sourceCode.getText().slice(prev.range[1], curr.range[0]);
                    if (/\n\s*\n/.test(textBetween)) {
                        hasEmptyLines = true;
                        break;
                    }
                }

                if (!notAtTop && !interleaved && !hasEmptyLines) return;

                let messageId = 'notAtTop';
                if (interleaved) messageId = 'interleaved';
                else if (hasEmptyLines) messageId = 'emptyLines';

                context.report({
                    node: importNodes[0],
                    messageId,
                    fix(fixer) {
                        const importTexts = importNodes.map((node) =>
                            sourceCode.getText(node)
                        );

                        // Range from first non-directive node up to last import node
                        const startNode = body[firstAllowedIndex];
                        const endNode = body[lastImportIndex];

                        // Gather any non-import nodes between firstAllowedIndex and lastImportIndex
                        const nonImportTexts = [];
                        for (let i = firstAllowedIndex; i <= lastImportIndex; i += 1) {
                            if (body[i].type !== 'ImportDeclaration') {
                                nonImportTexts.push(sourceCode.getText(body[i]));
                            }
                        }

                        const replacement = [
                            importTexts.join('\n'),
                            ...(nonImportTexts.length ? ['', ...nonImportTexts] : []),
                        ].join('\n');

                        return fixer.replaceTextRange(
                            [startNode.range[0], endNode.range[1]],
                            replacement
                        );
                    },
                });
            },
        };
    },
};

export default rule;
