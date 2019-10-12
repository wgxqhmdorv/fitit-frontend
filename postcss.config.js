module.exports = {
  plugins: [
    require("tailwindcss"),
    require("postcss-preset-env"),
    require("autoprefixer"),
    require("cssnano")({
      preset: "default"
    })
  ]
};
