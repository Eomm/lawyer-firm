import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginAstro from 'eslint-plugin-astro';
import prettier from 'eslint-config-prettier';

export default [
  // Base JavaScript recommendations
  js.configs.recommended,

  // TypeScript recommendations
  ...tseslint.configs.recommended,

  // Astro recommendations
  ...eslintPluginAstro.configs.recommended,

  // Prettier configuration (must be last to override conflicting rules)
  prettier,

  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx,astro}'],
    languageOptions: {
      globals: {
        browser: true,
        node: true,
        es2022: true,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      // General rules
      'no-console': 'warn',
      'no-debugger': 'error',
      'no-unused-vars': 'off', // Handled by @typescript-eslint/no-unused-vars
      'prefer-const': 'error',
      'no-var': 'error',

      // TypeScript specific rules
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',

      // Code style
      eqeqeq: ['error', 'always'],
      curly: ['error', 'all'],
      'prefer-template': 'error',
    },
  },

  // Astro-specific configuration
  {
    files: ['**/*.astro'],
    rules: {
      // Allow console in Astro components (common for SSR)
      'no-console': 'off',
    },
  },

  // TypeScript declaration files
  {
    files: ['**/*.d.ts'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },

  // Configuration files
  {
    files: ['**/*.config.{js,mjs,cjs,ts}'],
    languageOptions: {
      globals: {
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
      },
    },
    rules: {
      'no-console': 'off',
      '@typescript-eslint/no-var-requires': 'off',
    },
  },

  // Ignore patterns
  {
    ignores: ['dist/**', 'node_modules/**', '.astro/**', 'public/**', '*.min.js', 'coverage/**'],
  },
];
