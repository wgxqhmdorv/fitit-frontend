const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./components/*.js", "./pages/*.js"],

  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

module.exports = {
  plugins: [
    require("tailwindcss"),
    require("postcss-preset-env"),
    require("autoprefixer"),
    ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
    require("cssnano")({
      preset: "default"
    })
  ]
};
