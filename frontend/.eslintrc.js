const path = require("path")

module.exports = {
  plugins: ["react-hooks"],
  extends: ["../.eslintrc.js", "plugin:react/recommended"],
  rules: {
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
