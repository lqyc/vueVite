module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "prettier/prettier": 0,
    // quotes: ["warn", "single"],
    "max-len": [
      "warn",
      {
        code: 150,
      },
    ],
    "no-dupe-keys": 0,
    "eol-last": 0,
    eqeqeq: 0,
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/consistent-indexed-object-style": [
      "error",
      "index-signature",
    ],
    "@typescript-eslint/no-explicit-any": "off",
    "no-unused-vars": ["warn"],
    "@typescript-eslint/ban-types": ["error", {"extendDefaults": false}],
    "@typescript-eslint/no-var-requires": 0,
    "no-var": 1,
    "key-spacing": [2,{
      "beforeColon": false,
      "afterColon": true
    }]
  },
};
