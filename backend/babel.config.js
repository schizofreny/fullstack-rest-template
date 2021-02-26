module.exports = (api) => {
  api.cache(true)

  return {
    presets: [
      ["@babel/env", { useBuiltIns: "usage", corejs: "3.9" }],
      ["@babel/preset-typescript", { allExtensions: true, isTSX: true }],
    ],
    plugins: ["@babel/proposal-class-properties", "@babel/plugin-transform-runtime"],
    ignore: ["**/__tests__/**"],
  }
}
