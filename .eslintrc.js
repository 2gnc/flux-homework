module.exports = {
  "extends": "airbnb-base",
  "env": {
    "browser": true,
    "node": true,
  },
  "rules": {
      "padded-blocks": 1,
      "no-trailing-spaces": 1,
      "space-in-parens": ["error", "never"],
      "padded-blocks": ["error", { "classes": "always" }],
      "no-console": 0,
      "class-methods-use-this": 0,
      "radix": 0,
      "linebreak-style": 0,
      "no-param-reassign": ["error", {
        "props": false, 
      }],
      "consistent-return": 0,
      "import/prefer-default-export": 0,
  }
};  