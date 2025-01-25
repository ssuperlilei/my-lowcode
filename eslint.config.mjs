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
    'vue/block-order': ['error', {
      order: ['template', 'script', 'style'],
    }],
    'vue/no-empty-pattern': 'off',
    'vue/brace-style': ['error', '1tbs'],
    'style/brace-style': ['error', '1tbs'],
    'unused-imports/no-unused-imports': ['error', {
      varsIgnorePattern: '^_', // ignore unused imports
      argsIgnorePattern: '^_', // ignore unused function arguments
    }],
    'antfu/top-level-function': 'off',
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
    /**
     * Format CSS, LESS, SCSS files, also the `<style>` blocks in Vue
     * By default uses Prettier
     */
    css: true,
    /**
     * Format HTML files
     * By default uses Prettier
     */
    html: true,
    /**
     * Format Markdown files
     * Supports Prettier and dprint
     * By default uses Prettier
     */
    markdown: 'prettier',
    prettierOptions: {
      printWidth: 120,
    },
  },
})

export default config
