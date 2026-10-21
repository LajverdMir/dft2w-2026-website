/**
 * ESLint rule: A .tsx component file may have at most one hook call.
 * Multiple hook calls must be encapsulated into a custom hook.
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

const isHookCall = (node) => {
    if (!node || node.type !== 'CallExpression') return false;

    if (node.callee?.type === 'Identifier') {
        return /^use[A-Z0-9]/.test(node.callee.name);
    }
    if (
        node.callee?.type === 'MemberExpression' &&
        node.callee.object?.name === 'React' &&
        node.callee.property?.type === 'Identifier'
    ) {
        return /^use[A-Z0-9]/.test(node.callee.property.name);
    }
    return false;
};

const rule = {
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Limit .tsx files to at most one hook call',
        },
        schema: [],
        messages: {
            tooManyHooks:
                'A .tsx file may have at most one hook call (found {{count}} hook calls). Consolidate multiple hooks into a single use-[feature].ts hook.',
        },
    },
    create(context) {
        const filename = context.filename ?? context.getFilename();
        if (isHookOrNonComponentFile(filename)) return {};

        const hookCalls = [];

        return {
            CallExpression(node) {
                if (isHookCall(node)) {
                    hookCalls.push(node);
                    if (hookCalls.length > 1) {
                        context.report({
                            node,
                            messageId: 'tooManyHooks',
                            data: {
                                count: String(hookCalls.length),
                            },
                        });
                    }
                }
            },
        };
    },
};

export default rule;
