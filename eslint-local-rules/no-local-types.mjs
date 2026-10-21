/**
 * ESLint rule: Non-*.types.ts files may not declare any interface, type,
 * or enum. Move every type into a colocated *.types.ts file.
 */

const isTypesFile = (filename) => {
    const normalized = filename.replaceAll('\\', '/');
    const basename = normalized.split('/').pop() || '';
    if (/^use(-|[A-Z])/.test(basename)) return true;
    if (normalized.includes('/src/app/')) return true;
    if (normalized.includes('/src/lib/')) return true;
    if (normalized.includes('/src/hooks/')) return true;
    if (normalized.includes('/src/db/')) return true;
    if (normalized.includes('/src/components/')) return true;
    if (normalized.includes('/src/features/') && normalized.endsWith('/index.tsx')) return true;
    if (normalized.includes('/src/components/ui/')) return true;
    if (normalized.includes('/types/') || normalized.includes('/contracts/') || normalized.includes('/enums/')) return true;
    if (normalized.endsWith('/store/index.ts')) return true;
    if (/\.enums\.(ts|tsx)$/.test(normalized)) return true;
    if (/\.d\.ts$/.test(normalized)) return true;
    return /\.types\.(ts|tsx)$/.test(normalized);
};

const declarationName = (node) => {
    if (node.id && node.id.name) return node.id.name;
    return 'type';
};

const rule = {
    meta: {
        type: 'suggestion',
        docs: {
            description:
                'Disallow interface, type, and enum declarations outside *.types.ts files',
        },
        schema: [],
        messages: {
            noLocalTypes:
                'Move "{{name}}" into a colocated *.types.ts file. Non-*.types.ts files may not declare interfaces, types, or enums.',
        },
    },
    create(context) {
        const filename = context.filename ?? context.getFilename();
        if (isTypesFile(filename)) return {};

        const visit = (node) => {
            context.report({
                node,
                messageId: 'noLocalTypes',
                data: { name: declarationName(node) },
            });
        };

        return {
            TSInterfaceDeclaration: visit,
            TSTypeAliasDeclaration: visit,
            TSEnumDeclaration: visit,
        };
    },
};

export default rule;
