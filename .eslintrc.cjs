module.exports = {
  extends: ['plugin:vue/vue3-recommended', 'eslint:recommended'],
  globals: {
    module: true
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020
  },
  rules: {
    'no-undef': 'off',
    'comma-dangle': 'error',
    'vue/html-closing-bracket-newline': 'off'
  }
};
