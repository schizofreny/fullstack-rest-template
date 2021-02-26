const path = require("path")

module.exports = {
  extends: ["../.eslintrc.js"],
  parserOptions: {
    // https://github.com/typescript-eslint/typescript-eslint/issues/251
    project: path.resolve(__dirname, "./tsconfig.json"),
    tsconfigRootDir: __dirname,
    warnOnUnsupportedTypeScriptVersion: false,
  },
}
