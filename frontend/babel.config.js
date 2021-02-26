module.exports = (api) => {
  api.cache(true)

  return {
    presets: [
      ["@babel/preset-env", { useBuiltIns: "usage", corejs: "3.9" }],
      ["@babel/preset-react", {}],
      ["@babel/preset-typescript", { allExtensions: true, isTSX: true }],
    ],
  }
}
