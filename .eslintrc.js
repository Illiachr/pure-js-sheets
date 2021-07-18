module.exports = {
  'parser': '@babel/eslint-parser',
  'parserOptions': {
    configFile: './babel.config.json',
  },
  'env': {
    browser: true,
    node: true,
    es6: true,
  },
  'extends': ['eslint:recommended', 'google'],
  'rules': {
    'arrow-parens': 'off',
    'comma-dangle': 'off',
    'require-jsdoc': 'off',
    'operator-linebreak': 'off',
    'linebreak-style': [
      'error',
      'windows'
    ],
    'no-console': ['error', {allow: ['warn']}]
  },
};
