/**
 * ESLint rule: All component logic and side-effects must reside in a use-[feature].ts hook file.
 * .tsx component files should focus purely on presentation and rendering.
 */

const isHookOrNonComponentFile = (filename) => {
    const normalized = filename.replaceAll('\\', '/');
    if (!normalized.endsWith('.tsx')) return true;
    if (normalized.includes('/src/components/ui/')) return true;
    if (/\.(test|spec|stories)\.tsx$/.test(normalized)) return true;
    if (normalized.includes('/hooks/') || normalized.includes('/_hooks/')) return true;
    const basename = normalized.split('/').pop() || '';
    if (/^use(-|[A-Z])/.test(basename)) return true;
    return false;
};

const LOGIC_HOOKS = new Set([
    'useEffect',
    'useLayoutEffect',
    'useReducer',
    'useInsertionEffect',
    'useCallback',
    'useMemo',
]);

const getHookName = (node) => {
    if (node.callee?.type === 'Identifier') {
        return node.callee.name;
    }
    if (
        node.callee?.type === 'MemberExpression' &&
        node.callee.object?.name === 'React' &&
        node.callee.property?.type === 'Identifier'
    ) {
        return node.callee.property.name;
    }
    return null;
};

const rule = {
    meta: {
        type: 'suggestion',
        docs: {
            description:
                'Enforce that side-effects and complex logic are placed in a use-[feature].ts hook file rather than inline in .tsx components',
        },
        schema: [],
        messages: {
            logicInHook:
                'Component logic ({{name}}) should be extracted into a dedicated use-[feature].ts hook file.',
        },
    },
    create(context) {
        const filename = context.filename ?? context.getFilename();
        if (isHookOrNonComponentFile(filename)) return {};

        return {
            CallExpression(node) {
                const hookName = getHookName(node);
                if (hookName && LOGIC_HOOKS.has(hookName)) {
                    context.report({
                        node,
                        messageId: 'logicInHook',
                        data: {
                            name: hookName,
                        },
                    });
                }
            },
        };
    },
};

export default rule;
