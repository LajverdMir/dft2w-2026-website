/**
 * ESLint rule: named imports from one module must stay on a single line.
 */
const rule = {
    meta: {
        type: 'layout',
        docs: {
            description: 'Require named imports from a module to be on a single compressed line',
        },
        fixable: 'whitespace',
        schema: [],
        messages: {
            singleLine: 'Named imports from a single module must be compressed on one line.',
        },
    },
    create(context) {
        const sourceCode = context.sourceCode ?? context.getSourceCode();

        return {
            ImportDeclaration(node) {
                const hasNamed = node.specifiers.some(
                    (specifier) => specifier.type === 'ImportSpecifier'
                );
                if (!hasNamed) return;

                const openBrace = sourceCode.getFirstToken(
                    node,
                    (token) => token.value === '{'
                );
                const closeBrace = sourceCode.getLastToken(
                    node,
                    (token) => token.value === '}'
                );
                if (!openBrace || !closeBrace) return;

                if (openBrace.loc.start.line === closeBrace.loc.start.line) return;

                context.report({
                    node,
                    messageId: 'singleLine',
                    fix(fixer) {
                        const inner = sourceCode.text
                            .slice(openBrace.range[1], closeBrace.range[0])
                            .replace(/\s*\n\s*/g, ' ')
                            .replace(/\s+/g, ' ')
                            .trim()
                            .replace(/,$/, '');
                        return fixer.replaceTextRange(
                            [openBrace.range[0], closeBrace.range[1]],
                            `{ ${inner} }`
                        );
                    },
                });
            },
        };
    },
};

export default rule;
