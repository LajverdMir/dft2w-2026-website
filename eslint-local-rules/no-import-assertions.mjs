/**
 * ESLint rule: no assertions in imports.
 * Bans named-import aliases (`{ Foo as Bar }`), namespace imports
 * (`import * as Foo`), import attributes (`assert` / `with`), and
 * `as` casts on dynamic `import()`.
 */

const isUiPrimitive = (filename) => filename.replaceAll('\\', '/').includes('/src/components/ui/');

const importedName = (specifier) => {
    const imported = specifier.imported;
    if (!imported) return null;
    if (imported.type === 'Identifier') return imported.name;
    if (imported.type === 'Literal') return String(imported.value);
    return null;
};

const rule = {
    meta: {
        type: 'suggestion',
        docs: {
            description:
                'Disallow import aliases, namespace imports, import attributes, and type assertions on dynamic imports',
        },
        schema: [],
        messages: {
            alias: "Import '{{imported}}' without aliasing it as '{{local}}'.",
            namespace: "Do not use namespace imports (`import * as {{local}}`). Import named bindings instead.",
            attributes: 'Do not use import assertions or attributes (`assert` / `with`).',
            dynamicAssert: 'Do not assert the result of a dynamic import().',
        },
    },
    create(context) {
        const filename = context.filename ?? context.getFilename();
        if (isUiPrimitive(filename)) {
            return {};
        }

        return {
            ImportDeclaration(node) {
                const attributes = node.attributes ?? node.assertions ?? [];
                if (attributes.length > 0) {
                    context.report({ node, messageId: 'attributes' });
                }

                for (const specifier of node.specifiers) {
                    if (specifier.type === 'ImportNamespaceSpecifier') {
                        context.report({
                            node: specifier,
                            messageId: 'namespace',
                            data: { local: specifier.local.name },
                        });
                        continue;
                    }
                    if (specifier.type !== 'ImportSpecifier') continue;
                    const imported = importedName(specifier);
                    const local = specifier.local.name;
                    if (imported && imported !== local) {
                        context.report({
                            node: specifier,
                            messageId: 'alias',
                            data: { imported, local },
                        });
                    }
                }
            },
            ImportExpression(node) {
                const parent = node.parent;
                if (!parent) return;
                if (parent.type === 'TSAsExpression' || parent.type === 'TSTypeAssertion') {
                    context.report({ node: parent, messageId: 'dynamicAssert' });
                }
            },
        };
    },
};

export default rule;
