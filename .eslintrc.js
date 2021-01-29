module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: ["plugin:@typescript-eslint/recommended", "prettier", "prettier/@typescript-eslint"],
  rules: {
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/explicit-function-return-type": ["off"],
    "@typescript-eslint/explicit-module-boundary-types": ["off"],
    "@typescript-eslint/no-empty-interface": ["warn"],
    "@typescript-eslint/ban-ts-comment": ["warn"],
    "@typescript-eslint/ban-types": "warn",
    "no-console": ["warn"],
  },
}
