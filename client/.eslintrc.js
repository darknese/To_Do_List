module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    parser: "@typescript-eslint/parser",
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:nuxt/recommended",
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["prettier"],
  overrides: [
    {
      files: ["**/*.vue"],
      rules: {
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "vue/multi-word-component-names": "off",
      },
    },
    {
      files: ["**/*.d.ts"],
      rules: {
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": "off",
      },
    },
    {
      files: ["**/*.ts"],
      rules: {
        "no-undef": "off",
        "import/no-mutable-exports": "off",
      },
    },
  ],
};
