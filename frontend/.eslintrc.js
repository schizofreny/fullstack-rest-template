const path = require("path")
const parentConfig = require("../.eslintrc.js")

module.exports = {
  ...parentConfig,
  plugins: [...parentConfig.plugins, "react-hooks"],
  extends: [...parentConfig.extends, "plugin:react/recommended"],
  rules: {
    ...parentConfig.rules,
    "react/prop-types": ["off"],
    "react/self-closing-comp": ["warn"],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "prefer-rest-params": "warn",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  parserOptions: {
    // https://github.com/typescript-eslint/typescript-eslint/issues/251
    project: path.resolve(__dirname, "./tsconfig.json"),
    tsconfigRootDir: __dirname,
    warnOnUnsupportedTypeScriptVersion: false,
  },
}
