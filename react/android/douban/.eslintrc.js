module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'eol-last': 0,
    'no-trailing-spaces': 0,
    'space-before-blocks': 0,
    indent: 0,
    'space-before-function-paren': 0,
    'comma-spacing': 0,
    'prettier/prettier':0,
    'semi':0,
    'react/self-closing-comp':0,
    'no-undef':0,
    'comma-dangle':0,
    'react-native/no-inline-styles':0
  }
};
