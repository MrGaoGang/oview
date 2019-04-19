module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          browsers: ["last 3 versions", "ie>=9"]
        },
        useBuiltIns: "entry",
        debug: false
      }
    ]
  ],
  plugins: [
    "@babel/plugin-transform-runtime",
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-proposal-object-rest-spread",
    "transform-vue-jsx",
    [
      "import",
      {
        libraryName: "iview",
        libraryDirectory: "src/components"
      }
    ]
  ]
};
