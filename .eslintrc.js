module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ["standard", "plugin:react/recommended", "plugin:import/errors"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react", "import", "standard"],
  rules: {}
};
