import path from 'path';

const ALLOWED_RESERVED_NAMES = new Set([
    'index.tsx',
    'page.tsx',
    'layout.tsx',
    'loading.tsx',
    'not-found.tsx',
    'error.tsx',
    'global-error.tsx',
    'template.tsx',
    'default.tsx',
    'opengraph-image.tsx',
    // Same Next.js special-file set the other local rules exempt
    // (e.g. component-arrow-function's NEXTJS_SPECIAL_FILENAMES) — this list
    // had drifted out of sync and was missing these, which would have forced
    // renaming Next.js's own required route filenames.
    'route.tsx',
    'middleware.tsx',
    'instrumentation.tsx',
    'icon.tsx',
    'apple-icon.tsx',
    'twitter-image.tsx',
]);

/**
 * ESLint rule: enforce that component .tsx files must be named `index.tsx`
 * (apart from reserved Next.js files, test files, and components/ui primitives).
 */
const rule = {
    meta: {
        type: 'problem',
        docs: {
            description: 'Enforce index.tsx naming convention for all component .tsx files',
        },
        schema: [],
        messages: {
            mustBeIndexTsx:
                "Component TSX file '{{filename}}' must be named 'index.tsx' inside its own component folder.",
            kebabCaseTsx:
                "TSX filename '{{filename}}' must be kebab-case (no camelCase or PascalCase).",
        },
    },
    create(context) {
        const fullPath = context.filename ?? context.getFilename();
        if (!fullPath || !fullPath.endsWith('.tsx')) {
            return {};
        }

        const normalizedPath = fullPath.replace(/\\/g, '/');
        const basename = path.basename(fullPath);
        const nameWithoutExt = basename.replace(/\.tsx$/, '');

        // Disallow uppercase (camelCase or PascalCase)
        if (/[A-Z]/.test(nameWithoutExt)) {
            return {
                Program(node) {
                    context.report({
                        node,
                        messageId: 'kebabCaseTsx',
                        data: {
                            filename: basename,
                        },
                    });
                },
            };
        }

        // Allow Next.js reserved files
        if (ALLOWED_RESERVED_NAMES.has(basename)) {
            return {};
        }

        // Allow test files (*.test.tsx, *.spec.tsx)
        if (basename.endsWith('.test.tsx') || basename.endsWith('.spec.tsx')) {
            return {};
        }

        // Allow shadcn UI library primitives inside src/components/ui/
        if (normalizedPath.includes('/src/components/ui/')) {
            return {};
        }

        // All other component .tsx files MUST be named index.tsx
        return {
            Program(node) {
                context.report({
                    node,
                    messageId: 'mustBeIndexTsx',
                    data: {
                        filename: basename,
                    },
                });
            },
        };
    },
};

export default rule;
