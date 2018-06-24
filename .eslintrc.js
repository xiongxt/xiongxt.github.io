module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    semi: ['error', 'always', {
      omitLastInOneLineBlock: true
    }],
    indent: ['error', 4],
    'no-debugger': 0,
    'no-undef': 0
  }
}