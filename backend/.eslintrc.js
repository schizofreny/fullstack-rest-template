const path = require("path")
const parentConfig = require("../.eslintrc.js")

module.exports = {
  plugins: [...parentConfig.plugins],
  extends: [...parentConfig.extends],
  rules: { ...parentConfig.rules },
  parserOptions: {
    // https://github.com/typescript-eslint/typescript-eslint/issues/251
    project: path.resolve(__dirname, "./tsconfig.json"),
    tsconfigRootDir: __dirname,
    warnOnUnsupportedTypeScriptVersion: false,
  },
}
