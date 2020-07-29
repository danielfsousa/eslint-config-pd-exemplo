module.exports = {
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'prettier'
  ],
  plugins: [
    'pd-exemplo'
  ],
  rules: {
    'pd-exemplo/async-function-suffix': 1
  }
};
