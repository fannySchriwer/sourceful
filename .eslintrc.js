module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: `react-app`,
  extends: `airbnb`,
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "linebreak-style": 0,
    "react/jsx-fragments": [enabled, element]
  },
}
