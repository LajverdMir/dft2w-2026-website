/**
 * ESLint rule: use Tailwind scale classes (w-4, p-2, text-sm) instead of
 * arbitrary numeric sizes (w-[16px], p-[8px], text-[14px]).
 */

const SIZE_PREFIX = new Set([
    'w',
    'h',
    'size',
    'basis',
    'p',
    'px',
    'py',
    'pt',
    'pr',
    'pb',
    'pl',
    'ps',
    'pe',
    'm',
    'mx',
    'my',
    'mt',
    'mr',
    'mb',
    'ml',
    'ms',
    'me',
    'gap',
    'gap-x',
    'gap-y',
    'space-x',
    'space-y',
    'divide-x',
    'divide-y',
]);

const NUMERIC_SIZE = /^-?\d+(\.\d+)?(px|rem)?$/;
const FRACTION_SIZE = /^\d+\/\d+$/;

const isUiPrimitive = (filename) => filename.replaceAll('\\', '/').includes('/src/components/ui/');

const stripVariants = (token) => {
    let rest = token;
    if (rest.startsWith('!')) {
        rest = rest.slice(1);
    }
    while (true) {
        const grouped = rest.match(/^(\[[^\]]+]:)(.+)$/);
        if (grouped) {
            rest = grouped[2];
            continue;
        }
        const named = rest.match(/^([\w-]+):(.+)$/);
        if (named) {
            rest = named[2];
            continue;
        }
        break;
    }
    return rest;
};

const isNumericSizeValue = (value) => NUMERIC_SIZE.test(value) || FRACTION_SIZE.test(value);

const arbitrarySizeClass = (token) => {
    const core = stripVariants(token);
    const body = core.startsWith('-') ? core.slice(1) : core;
    const match = body.match(/^([a-z]+(?:-[a-z]+)*)-\[([^\]]+)]$/);
    if (!match) {
        return null;
    }
    const [, prefix, value] = match;
    if (!SIZE_PREFIX.has(prefix) || !isNumericSizeValue(value)) {
        return null;
    }
    return token;
};

const classTokensIn = (text) => text.split(/\s+/).filter(Boolean);

const rule = {
    meta: {
        type: 'suggestion',
        docs: {
            description:
                'Require Tailwind native scale sizes instead of arbitrary numeric values in class names',
        },
        schema: [],
        messages: {
            useNativeSize:
                "Use a Tailwind scale class instead of arbitrary '{{className}}' (e.g. w-4 not w-[16px]).",
        },
    },
    create(context) {
        const filename = context.filename ?? context.getFilename();
        if (isUiPrimitive(filename)) {
            return {};
        }

        const reportTokens = (node, text) => {
            if (typeof text !== 'string' || !text.includes('-[')) {
                return;
            }
            for (const token of classTokensIn(text)) {
                const className = arbitrarySizeClass(token);
                if (className) {
                    context.report({
                        node,
                        messageId: 'useNativeSize',
                        data: { className },
                    });
                }
            }
        };

        return {
            Literal(node) {
                if (typeof node.value === 'string') {
                    reportTokens(node, node.value);
                }
            },
            TemplateElement(node) {
                reportTokens(node, node.value.cooked ?? node.value.raw ?? '');
            },
        };
    },
};

export default rule;
