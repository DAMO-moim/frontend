import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactNative from "eslint-plugin-react-native";
import prettier from "eslint-config-prettier";

// Flat config는 defineConfig 없어도 됨
export default [
  js.configs.recommended, // 기본 JavaScript 룰셋

  {
    plugins: {
      react,
      "react-native": reactNative,
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        __DEV__: true, // React Native에 자주 나오는 글로벌
      },
    },
    settings: {
      react: {
        version: "detect",
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

  // prettier 설정은 맨 마지막에 덮어쓰기 용도로 추가
  prettier,
];