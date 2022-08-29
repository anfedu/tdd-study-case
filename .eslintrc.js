module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "plugin:testing-library/react",
    "next",
    "next/core-web-vitals",
  ],
  // overrides: [
  //   {
  //     files: ["*.ts", "*.tsx"], // Your TypeScript files extension
  //     parserOptions: {
  //       project: ["./tsconfig.json"], // Specify it only for TypeScript files
  //     },
  //   },
  // ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: 12,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },

  // rules: {},
};
