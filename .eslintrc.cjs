module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-unused-vars': 'warn',
    'prefer-const': 'warn',
    'semi': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'indent': ['error', 2],
    'arrow-spacing': 'error',
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
    'max-len': ['error', { 'code': 120 }] 
  },
}
