/**
 * ESLint Configuration
 * Flat config format (ESLint 9+)
 */

import js from '@eslint/js';
import globals from 'globals';
import prettier from 'eslint-plugin-prettier/recommended';

export default [
  {
    ignores: ['node_modules/**', 'dist/**', 'build/**', 'assets/css/main.css', '.husky/**'],
  },
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'prefer-const': 'error',
      'no-var': 'error',
    },
  },
  prettier,
];
