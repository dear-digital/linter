module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    // New Rules
    "react/prop-types": "off",
    semi: ["error", "always"],
    indent: ["error", 2],
    "no-console": "warn",
    "no-unused-vars": "warn",
    "no-unused-expressions": "error",
    "no-trailing-spaces": "error",
    "no-var": "error",
    "no-empty-function": "error",
    'space-before-function-paren': ['error', 'always']
    // 'quotes': ['error', 'double'],
  },
};
