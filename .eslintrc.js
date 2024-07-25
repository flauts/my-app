const { rules } = require("eslint-config-prettier");
const { default: plugin } = require("tailwindcss");
// const { default: plugin } = require("tailwindcss");

// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ['expo', 'prettier'],
  plugins: ['prettier', 'tailwindcss'],
  rules: {
    'prettier/prettier': 'error'
  },
};
