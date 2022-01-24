module.exports = {
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'class-methods-use-this': 'off',
    'consistent-return': ['error', { treatUndefinedAsUnspecified: true }],
    'func-names': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 1 }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-restricted-syntax': 'off',
    'object-curly-newline': 'off',
    quotes: 'off',
  },
};
