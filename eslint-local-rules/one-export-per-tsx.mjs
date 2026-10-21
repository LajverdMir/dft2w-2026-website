/**
 * ESLint rule: a .tsx file may have only one export (the component itself).
 * Next.js route segment configs (metadata, dynamic, etc.) in `src/app/**`
 * and compound UI primitives in `src/components/ui/**` are exempted.
 */

const NEXTJS_SPECIAL_EXPORTS = new Set([
    'metadata',
    'generateMetadata',
    'viewport',
    'generateViewport',
    'dynamic',
    'dynamicParams',
    'revalidate',
    'fetchCache',
    'runtime',
    'preferredRegion',
    'maxDuration',
    'generateStaticParams',
    'experimental_ppr',
    'size',
    'contentType',
    'alt',
]);

const isExempt = (filename) => {
    const normalized = filename.replaceAll('\\', '/');
    if (normalized.includes('/src/components/ui/')) return true;
    if (normalized.includes('/src/components/layout/')) return true;
    if (normalized.includes('/src/components/shared/bug-report-toast')) return true;
    return false;
};

const rule = {
    meta: {
        type: 'problem',
        docs: {
            description:
                'Enforce that a .tsx file has at most one export (the component itself)',
        },
        schema: [],
        messages: {
            oneExportPerTsx:
                'A .tsx file must have only one export (the component itself). Move extra export "{{name}}" to a colocated *.constants.ts, *.utils.ts, or *.types.ts file.',
        },
    },
    create(context) {
        const filename = context.filename ?? context.getFilename();
        if (!filename || !filename.endsWith('.tsx') || isExempt(filename)) {
            return {};
        }

        const isAppRoute = filename.replaceAll('\\', '/').includes('/src/app/');
        const exportsList = [];

        return {
            ExportNamedDeclaration(node) {
                // Ignore type-only exports (handled by types-in-types-file rule)
                if (node.exportKind === 'type') return;

                if (node.declaration) {
                    const decl = node.declaration;
                    // Ignore interface/type declarations (handled by types-in-types-file)
                    if (
                        decl.type === 'TSInterfaceDeclaration' ||
                        decl.type === 'TSTypeAliasDeclaration' ||
                        decl.type === 'TSEnumDeclaration'
                    ) {
                        return;
                    }

                    if (decl.type === 'VariableDeclaration') {
                        for (const v of decl.declarations) {
                            const name = v.id?.name;
                            if (isAppRoute && NEXTJS_SPECIAL_EXPORTS.has(name)) {
                                continue;
                            }
                            exportsList.push({ node: v, name: name ?? 'variable' });
                        }
                    } else if (decl.type === 'FunctionDeclaration') {
                        const name = decl.id?.name;
                        if (isAppRoute && NEXTJS_SPECIAL_EXPORTS.has(name)) {
                            return;
                        }
                        exportsList.push({ node: decl, name: name ?? 'function' });
                    } else {
                        exportsList.push({ node: decl, name: 'declaration' });
                    }
                } else if (node.specifiers?.length) {
                    for (const spec of node.specifiers) {
                        const name = spec.exported?.name ?? spec.local?.name;
                        if (isAppRoute && NEXTJS_SPECIAL_EXPORTS.has(name)) {
                            continue;
                        }
                        exportsList.push({ node: spec, name });
                    }
                }
            },
            ExportDefaultDeclaration(node) {
                exportsList.push({ node, name: 'default' });
            },
            'Program:exit'() {
                if (exportsList.length > 1) {
                    // Report all exports after the first one
                    for (let i = 1; i < exportsList.length; i++) {
                        context.report({
                            node: exportsList[i].node,
                            messageId: 'oneExportPerTsx',
                            data: {
                                name: exportsList[i].name,
                            },
                        });
                    }
                }
            },
        };
    },
};

export default rule;
