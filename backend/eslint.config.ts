import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js, "promise": require("eslint-plugin-promise") },
    extends: ["js/recommended", "plugin:promise/recommended"],
    languageOptions: { globals: globals.browser },
    rules: {
      "require-await": "error",
      "promise/always-return": "error",
      "promise/catch-or-return": "error",
      "promise/no-return-wrap": "error",
      "promise/param-names": "error",
 
    }
  },
  tseslint.configs.recommended,
]);
