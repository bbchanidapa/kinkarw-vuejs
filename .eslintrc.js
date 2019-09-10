// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 6,
    sourceType: 'module',

  },
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ["plugin:vue/base"],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    "no-console": 0,
    semi: [
      "error",
      "never"
    ],
    indent: ["error", 2],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
