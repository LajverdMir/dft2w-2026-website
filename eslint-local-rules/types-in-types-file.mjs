/**
 * ESLint rule: exported types/interfaces/enums only from `*.types.ts`
 * (or declaration files `*.d.ts`, and `src/enums/**`).
 */
const isAllowedFile = (filename) => {
    const normalized = filename.replaceAll('\\', '/');
    const basename = normalized.split('/').pop() || '';
    if (/^use(-|[A-Z])/.test(basename)) return true;
    if (normalized.includes('/src/app/')) return true;
    if (normalized.includes('/src/lib/')) return true;
    if (normalized.includes('/src/hooks/')) return true;
    if (normalized.includes('/src/db/')) return true;
    if (normalized.includes('/src/components/')) return true;
    if (normalized.includes('/src/features/') && normalized.endsWith('/index.tsx')) return true;
    if (normalized.includes('/src/enums/')) return true;
    if (normalized.includes('/src/components/ui/')) return true;
    if (normalized.endsWith('/src/store/index.ts')) return true;
    if (/\.enums\.ts$/.test(normalized)) return true;
    if (/\.d\.ts$/.test(normalized)) return true;
    return /\.types\.ts$/.test(normalized);
};

const TYPE_EXPORT_KINDS = new Set([
    'TSInterfaceDeclaration',
    'TSTypeAliasDeclaration',
    'TSEnumDeclaration',
]);

const rule = {
    meta: {
        type: 'problem',
        docs: {
            description:
                'Allow exported types/interfaces/enums only from *.types.ts files',
        },
        schema: [],
        messages: {
            typesFileOnly:
                'Export "{{name}}" from a *.types.ts file (not {{file}}).',
        },
    },
    create(context) {
        const filename = context.filename ?? context.getFilename();
        if (isAllowedFile(filename)) return {};

        const reportExport = (node, name) => {
            context.report({
                node,
                messageId: 'typesFileOnly',
                data: {
                    name: name ?? 'type',
                    file: filename.split('/').pop() ?? filename,
                },
            });
        };

        return {
            ExportNamedDeclaration(node) {
                if (node.declaration && TYPE_EXPORT_KINDS.has(node.declaration.type)) {
                    const decl = node.declaration;
                    const name =
                        'id' in decl && decl.id && 'name' in decl.id
                            ? decl.id.name
                            : undefined;
                    reportExport(node, name);
                    return;
                }

                if (node.exportKind === 'type' && node.specifiers?.length) {
                    for (const specifier of node.specifiers) {
                        reportExport(
                            specifier,
                            specifier.exported?.name ?? specifier.local?.name
                        );
                    }
                }
            },
            ExportDefaultDeclaration(node) {
                if (TYPE_EXPORT_KINDS.has(node.declaration?.type)) {
                    reportExport(node, 'default');
                }
            },
        };
    },
};

export default rule;
