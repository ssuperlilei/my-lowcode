// eslint.config.mjs
import antfu from '@antfu/eslint-config'

/** @type {import('@antfu/eslint-config').Config} */
const config = antfu({
  vue: true,
  stylistic: {
    semi: false,
    indent: 2,
    quotes: 'single',
  },
  rules: {
    'vue/block-order': ['error', { order: ['template', 'script', 'style'] }],
    'antfu/top-level-function': 'off',
    'vue/jsx-uses-vars': 'error',
    'no-unused-vars': ['error', { varsIgnorePattern: '_', argsIgnorePattern: '_', caughtErrorsIgnorePattern: '_' }],
    'vue/no-empty-pattern': 'off',
    'vue/brace-style': ['error', '1tbs'],
    'style/brace-style': ['error', '1tbs'],
    'unused-imports/no-unused-imports': ['error', {
      varsIgnorePattern: '^_', // ignore unused imports
      argsIgnorePattern: '^_', // ignore unused function arguments
    }],
    'unused-imports/no-unused-vars': ['error', {
      args: 'all',
      argsIgnorePattern: '^_',
      caughtErrors: 'all',
      caughtErrorsIgnorePattern: '^_',
      destructuredArrayIgnorePattern: '^_',
      varsIgnorePattern: '^_',
      ignoreRestSiblings: true,
    }],
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    'vue/script-indent': ['warn', 2, { baseIndent: 1 }],
    'no-console': 'off',
  },

  typescript: {
    tsconfigPath: 'tsconfig.json',
  },
  isInEditor: false,
  ignores: [
    'dist',
    'node_modules',
    'public',
    'pnpm-lock.yaml',
    '.husky/**',
  ],
  formatters: {
    css: true,
    html: true,
    markdown: 'prettier',
    prettierOptions: {
      printWidth: 120,
    },
  },
})

export default config
