module.exports = {
    env: {
      browser: true,
      es6: true,
      jest: true,
      node: true,
    },
    extends: [
      "eslint:recommended",
      "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
      "prettier",
    ],
    ignorePatterns: ["coverage"],
    noInlineConfig: true,
    parserOptions: {
      ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
      sourceType: "module",
    },
    plugins: ["prettier"],
    reportUnusedDisableDirectives: true,
    root: true,
    rules: {
      // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
      // e.g. "@typescript-eslint/explicit-function-return-type": "off",
      "no-console": "error",
      "prettier/prettier": "error",
    },
  };
  