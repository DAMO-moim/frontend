import { defineConfig } from "@eslint/js"; 
import reactPlugin from "eslint-plugin-react";
import reactNativePlugin from "eslint-plugin-react-native";
import prettierConfig from "eslint-config-prettier";

export default defineConfig([
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
      react: reactPlugin,
      "react-native": reactNativePlugin,
    },
    extends: [
      "plugin:react/recommended", // React 권장 설정
      "plugin:react-native/all",  // React Native 권장 설정
      "prettier",                 // Prettier 설정 적용
    ],
    settings: {
      react: {
        version: "detect", // React 버전 자동 감지
      },
    },
    rules: {
      "react/function-component-definition": "off",
      "no-param-reassign": "off",
      "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
      "no-use-before-define": ["error", { variables: false }],
      "react/prop-types": ["error", { ignore: ["navigation", "navigation.navigate"] }],
      "react-native/no-inline-styles": "error",
      "max-lines": ["error", { max: 500 }],
    },
  },
]);
