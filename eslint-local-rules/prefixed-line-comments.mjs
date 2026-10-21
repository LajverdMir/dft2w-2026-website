/**
 * ESLint rule: only prefixed // comments (TODO, FIXME, HACK, NOTE).
 * Block comments and unprefixed line comments are reported.
 */

const PREFIX = /^(TODO|FIXME|HACK|NOTE): .+/;

const isExemptFile = (filename) => {
    const normalized = filename.replaceAll('\\', '/');
    if (normalized.includes('/src/components/ui/')) return true;
    if (/\.d\.ts$/.test(normalized)) return true;
    return false;
};

const commentText = (comment) => comment.value.replace(/^\s+/, '').replace(/\s+$/, '');

const isTripleSlashReference = (comment) =>
    comment.type === 'Line' && /^\/\s*<reference\b/.test(comment.value);

const eslintDirective = (text) => {
    if (/^eslint-enable\b/.test(text)) return { kind: 'enable' };
    if (/^eslint-env\b/.test(text)) return { kind: 'env' };
    if (/^eslint-disable(?:-next-line)?\b/.test(text)) return { kind: 'disable' };
    return null;
};

const tsDirective = (text) => {
    if (/^@ts-check\b/.test(text)) return { kind: 'check' };
    if (/^@ts-nocheck\b/.test(text)) return { kind: 'nocheck' };
    if (/^@ts-expect-error\b/.test(text) || /^@ts-ignore\b/.test(text)) return { kind: 'error' };
    return null;
};

const hasReason = (text) => / -- \S/.test(text);

const rule = {
    meta: {
        type: 'suggestion',
        docs: {
            description:
                'Allow only // TODO|FIXME|HACK|NOTE comments; disallow block comments',
        },
        schema: [],
        messages: {
            noBlockComments:
                'Use a single-line // TODO|FIXME|HACK|NOTE comment instead of a block comment.',
            needsPrefix:
                'Line comments must start with TODO:, FIXME:, HACK:, or NOTE: followed by a space and a body.',
            directiveNeedsReason:
                'Add a reason after "--" on this directive comment.',
        },
    },
    create(context) {
        const filename = context.filename ?? context.getFilename();
        if (isExemptFile(filename)) return {};

        const sourceCode = context.sourceCode ?? context.getSourceCode();

        return {
            Program() {
                for (const comment of sourceCode.getAllComments()) {
                    if (comment.type === 'Block') {
                        context.report({ loc: comment.loc, messageId: 'noBlockComments' });
                        continue;
                    }

                    if (isTripleSlashReference(comment)) continue;

                    const text = commentText(comment);

                    const eslint = eslintDirective(text);
                    if (eslint) {
                        if (eslint.kind === 'disable' && !hasReason(text)) {
                            context.report({ loc: comment.loc, messageId: 'directiveNeedsReason' });
                        }
                        continue;
                    }

                    const ts = tsDirective(text);
                    if (ts) {
                        if (ts.kind === 'error' && !hasReason(text)) {
                            context.report({ loc: comment.loc, messageId: 'directiveNeedsReason' });
                        }
                        continue;
                    }

                    if (!PREFIX.test(text)) {
                        context.report({ loc: comment.loc, messageId: 'needsPrefix' });
                    }
                }
            },
        };
    },
};

export default rule;
