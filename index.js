module.exports = {
  root: true,
  env: { es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: [],
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', 'simple-import-sort', 'unused-imports'],
  rules: {
    'prettier/prettier': 'error',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'unused-imports/no-unused-imports': 'error',
  },
};
