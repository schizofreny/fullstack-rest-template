module.exports = (api) => {
  api.cache(true)

  return {
    presets: [
      ["@babel/preset-env", { targets: "> 0.25%", useBuiltIns: "usage", corejs: "3" }],
      ["@babel/preset-react", {}],
      ["@babel/preset-typescript", { allExtensions: true, isTSX: true }],
    ],
  }
}
