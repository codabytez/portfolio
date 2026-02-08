import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-plugin-prettier/recommended";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  prettier,
  {
    rules: {
      // Prettier
      "prettier/prettier": ["error"],

      // Console & Debugger
      "no-console": ["error", { allow: ["warn", "error"] }], // Allow console.warn and console.error
      "no-debugger": "error",

      // TypeScript specific
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-module-boundary-types": "off",

      // Code quality
      "no-var": "error",
      "prefer-const": "error",
      "prefer-arrow-callback": "error",
      "no-duplicate-imports": "error",

      // React/Next.js best practices
      "react/self-closing-comp": "error",
      "react/jsx-curly-brace-presence": [
        "error",
        { props: "never", children: "never" },
      ],
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      // Stricter rules
      eqeqeq: ["error", "always"], // Require === and !==
      "no-alert": "error", // No alert(), confirm(), prompt()
      "no-eval": "error", // No eval()
      "no-implied-eval": "error", // No setTimeout/setInterval with strings
      "no-return-await": "error", // No unnecessary return await

      // Import organization
      "sort-imports": [
        "error",
        {
          ignoreCase: true,
          ignoreDeclarationSort: true, // Let prettier handle this
        },
      ],

      // Naming conventions
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "interface",
          format: ["PascalCase"],
          prefix: ["I"],
        },
        {
          selector: "typeAlias",
          format: ["PascalCase"],
        },
      ],
    },
  },
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "node_modules/**",
  ]),
]);

export default eslintConfig;
