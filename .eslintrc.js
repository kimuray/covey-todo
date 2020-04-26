const OFF = 0
const ERROR = 2

module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended",
        "plugin:@typescript-eslint/eslint-recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "prettier",
        "@typescript-eslint"
    ],
    "rules": {
        "no-unused-vars": OFF,
        "@typescript-eslint/no-unused-vars": ERROR,
        "react/prop-types": OFF,
        "prettier/prettier": [ERROR, require("./.prettierrc.js")]
    }
};
