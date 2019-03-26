module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        "eslint:recommended",
        "plugin:vue/recommended"
    ],
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        "quotes": ["error", "backtick"],
        "prefer-const": "error",
        "vue/html-indent": "off",
        "vue/attributes-order": "off",
        "vue/max-attributes-per-line": "off",
        "vue/html-closing-bracket-newline": "off",
        "indent": [
            "error",
            "tab"
        ],
        "semi": [
            "error",
            "always"
        ]
    },
    parserOptions: {
        parser: "babel-eslint"
    },
};
