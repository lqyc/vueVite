module.exports = {
  plugins: [
    [
      "import",
      {
        libraryName: "vant",
        libraryDirectory: "es",
        style: true,
      },
      "vant",
    ],
    "@babel/plugin-proposal-nullish-coalescing-operator",
    "@babel/plugin-proposal-optional-chaining"
  ],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
  presets: [
    ["@vue/app", {
      useBuiltIns: "entry"
    }]
  ]
};
