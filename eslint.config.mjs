import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import oneComponentPerFile from "./eslint-local-rules/one-component-per-file.mjs";
import noLocalTypes from "./eslint-local-rules/no-local-types.mjs";
import logicInHookFile from "./eslint-local-rules/logic-in-hook-file.mjs";
import maxOneHookCall from "./eslint-local-rules/max-one-hook-call.mjs";
import constantsInConstantsFile from "./eslint-local-rules/constants-in-constants-file.mjs";
import maxRelativeImportDepth from "./eslint-local-rules/max-relative-import-depth.mjs";
import noDefaultExport from "./eslint-local-rules/no-default-export.mjs";
import noReExport from "./eslint-local-rules/no-re-export.mjs";
import noJsxComments from "./eslint-local-rules/no-jsx-comments.mjs";
import kebabCaseTsxFiles from "./eslint-local-rules/kebab-case-tsx-files.mjs";
import singleLineImports from "./eslint-local-rules/single-line-imports.mjs";
import typesInTypesFile from "./eslint-local-rules/types-in-types-file.mjs";
import oneExportPerTsx from "./eslint-local-rules/one-export-per-tsx.mjs";
import contiguousImports from "./eslint-local-rules/contiguous-imports.mjs";
import oneRootFunctionInTsx from "./eslint-local-rules/one-root-function-in-tsx.mjs";
import componentArrowFunction from "./eslint-local-rules/component-arrow-function.mjs";
import prefixedLineComments from "./eslint-local-rules/prefixed-line-comments.mjs";
import nativeTailwindSizes from "./eslint-local-rules/native-tailwind-sizes.mjs";
import noImportAssertions from "./eslint-local-rules/no-import-assertions.mjs";
import noEmptyFile from "./eslint-local-rules/no-empty-file.mjs";

const brinnLocal = {
  rules: {
    "one-component-per-file": oneComponentPerFile,
    "no-local-types": noLocalTypes,
    "logic-in-hook-file": logicInHookFile,
    "max-one-hook-call": maxOneHookCall,
    "constants-in-constants-file": constantsInConstantsFile,
    "max-relative-import-depth": maxRelativeImportDepth,
    "no-default-export": noDefaultExport,
    "no-re-export": noReExport,
    "no-jsx-comments": noJsxComments,
    "kebab-case-tsx-files": kebabCaseTsxFiles,
    "single-line-imports": singleLineImports,
    "types-in-types-file": typesInTypesFile,
    "one-export-per-tsx": oneExportPerTsx,
    "contiguous-imports": contiguousImports,
    "one-root-function-in-tsx": oneRootFunctionInTsx,
    "component-arrow-function": componentArrowFunction,
    "prefixed-line-comments": prefixedLineComments,
    "native-tailwind-sizes": nativeTailwindSizes,
    "no-import-assertions": noImportAssertions,
    "no-empty-file": noEmptyFile,
  },
};

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "error",
      "import/no-anonymous-default-export": "error",
    },
  },
  {
    files: [
      "app/**/*.{ts,tsx}",
      "features/**/*.{ts,tsx}",
      "layouts/**/*.{ts,tsx}",
      "components/**/*.{ts,tsx}",
    ],
    plugins: {
      brinn: brinnLocal,
    },
    rules: {
      "brinn/one-component-per-file": "off",
      "brinn/no-local-types": "off",
      "brinn/logic-in-hook-file": "off",
      "brinn/max-one-hook-call": "off",
      "brinn/constants-in-constants-file": "off",
      "brinn/max-relative-import-depth": "off",
      "brinn/no-default-export": "off",
      "brinn/no-re-export": "off",
      "brinn/no-jsx-comments": "off",
      "brinn/kebab-case-tsx-files": "off",
      "brinn/single-line-imports": "off",
      "brinn/types-in-types-file": "off",
      "brinn/one-export-per-tsx": "off",
      "brinn/contiguous-imports": "off",
      "brinn/one-root-function-in-tsx": "off",
      "brinn/component-arrow-function": "off",
      "brinn/prefixed-line-comments": "off",
      "brinn/native-tailwind-sizes": "off",
      "brinn/no-import-assertions": "off",
      "brinn/no-empty-file": "off",
    },
  },
]);

export default eslintConfig;
