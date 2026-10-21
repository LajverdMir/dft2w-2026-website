/**
 * ESLint rule: Disallow default exports except in Next.js native framework files.
 * Allowed files include: page, layout, template, loading, error, global-error,
 * not-found, route, default, middleware, instrumentation, icon, opengraph-image,
 * sitemap, robots, manifest, and top-level config files.
 */

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
    'sitemap',
    'robots',
    'manifest',
]);

const isNextJsSpecialFile = (filename) => {
    const normalized = filename.replaceAll('\\', '/');
    const parts = normalized.split('/');
    const basenameWithExt = parts.pop() || '';
    const nameWithoutExt = basenameWithExt.replace(/\.(tsx|ts|jsx|js|mjs|cjs)$/, '');

    if (normalized.endsWith('.d.ts')) return true;
    if (NEXTJS_SPECIAL_FILENAMES.has(nameWithoutExt)) {
        return true;
    }

    // Root config files
    if (/\.(config|rc)\.(ts|js|mjs|cjs)$/.test(basenameWithExt)) {
        return true;
    }

    // Jest setup or next configs
    if (basenameWithExt.startsWith('jest.setup') || basenameWithExt.startsWith('next.config')) {
        return true;
    }

    return false;
};

const rule = {
    meta: {
        type: 'suggestion',
        docs: {
            description:
                'Disallow default exports except in Next.js framework files (page.tsx, layout.tsx, etc.)',
        },
        schema: [],
        messages: {
            noDefaultExport:
                'Default exports are not allowed. Use named exports ("export const / export function") instead. Default exports are only reserved for Next.js framework files (page, layout, route, etc.).',
        },
    },
    create(context) {
        const filename = context.filename ?? context.getFilename();
        if (isNextJsSpecialFile(filename)) return {};

        return {
            ExportDefaultDeclaration(node) {
                context.report({
                    node,
                    messageId: 'noDefaultExport',
                });
            },
            ExportNamedDeclaration(node) {
                const defaultSpecifier = node.specifiers?.find(
                    (s) => s.exported?.name === 'default'
                );
                if (defaultSpecifier) {
                    context.report({
                        node: defaultSpecifier,
                        messageId: 'noDefaultExport',
                    });
                }
            },
        };
    },
};

export default rule;
