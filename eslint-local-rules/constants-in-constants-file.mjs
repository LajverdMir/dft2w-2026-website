/**
 * ESLint rule: Enforce placing constants into colocated *.constants.ts files.
 */

const SCREAMING_SNAKE = /^[A-Z][A-Z0-9]*(_[A-Z0-9]+)*$/;

const isConstantsOrConfigFile = (filename) => {
    const normalized = filename.replaceAll('\\', '/');
    const basename = normalized.split('/').pop() || '';
    if (/^use(-|[A-Z])/.test(basename)) return true;
    if (normalized.includes('/src/app/')) return true;
    if (normalized.includes('/src/lib/')) return true;
    if (normalized.includes('/src/hooks/')) return true;
    if (normalized.includes('/src/db/')) return true;
    if (normalized.includes('/src/components/')) return true;
    if (normalized.includes('/src/features/') && normalized.endsWith('/index.tsx')) return true;
    if (normalized.includes('/constants/') || normalized.endsWith('/store/api/core.ts') || normalized.endsWith('/lib/env.ts') || normalized.includes('/env.')) return true;
    if (/\.constants\.(ts|tsx|js|mjs)$/.test(normalized)) return true;
    if (/\.config\.(ts|tsx|js|mjs)$/.test(normalized)) return true;
    if (/\.(test|spec)\.(ts|tsx)$/.test(normalized)) return true;
    return false;
};

const isScreamingSnake = (name) => typeof name === 'string' && SCREAMING_SNAKE.test(name);

const isConstKeywordAnnotation = (typeAnnotation) => {
    if (!typeAnnotation) return false;
    if (typeAnnotation.type === 'TSTypeReference') {
        const name = typeAnnotation.typeName;
        return name?.type === 'Identifier' && name.name === 'const';
    }
    return typeAnnotation.type === 'TSConstKeyword';
};

const isAsConstExpression = (node) => {
    if (!node) return false;
    if (node.type === 'TSAsExpression' || node.type === 'TSTypeAssertion') {
        return isConstKeywordAnnotation(node.typeAnnotation);
    }
    return false;
};

const initializerHasAsConstAssertion = (node) => {
    let current = node;
    while (current) {
        if (isAsConstExpression(current)) return true;
        if (current.type === 'TSSatisfiesExpression' || current.type === 'ParenthesizedExpression') {
            current = current.expression;
            continue;
        }
        return false;
    }
    return false;
};

const isModuleScope = (node) => {
    let current = node.parent;
    while (current) {
        if (current.type === 'Program') return true;
        if (
            current.type === 'ExportNamedDeclaration' ||
            current.type === 'ExportDefaultDeclaration' ||
            current.type === 'VariableDeclaration'
        ) {
            current = current.parent;
            continue;
        }
        return false;
    }
    return false;
};

const rule = {
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Enforce placing constants in colocated *.constants.ts files',
        },
        schema: [],
        messages: {
            constantsInFile:
                'Constants should be declared in a colocated *.constants.ts file (found "{{name}}").',
        },
    },
    create(context) {
        const filename = context.filename ?? context.getFilename();
        if (isConstantsOrConfigFile(filename)) return {};

        return {
            VariableDeclarator(node) {
                if (node.id?.type !== 'Identifier') return;
                const name = node.id.name;

                // Ignore standard component names / PascalCase (including all-caps like FAQ)
                if (/^[A-Z]/.test(name) && !isScreamingSnake(name)) return;
                if (/^[A-Z]/.test(name) && node.init && (
                    node.init.type === 'ArrowFunctionExpression' ||
                    node.init.type === 'FunctionExpression' ||
                    node.init.type === 'CallExpression'
                )) return;

                const screaming = isScreamingSnake(name);
                const hasAsConst = initializerHasAsConstAssertion(node.init);

                if ((screaming || hasAsConst) && isModuleScope(node)) {
                    context.report({
                        node: node.id,
                        messageId: 'constantsInFile',
                        data: { name },
                    });
                }
            },
        };
    },
};

export default rule;
