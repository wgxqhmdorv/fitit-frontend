const purgecss = require("@fullhuman/postcss-purgecss");

const plugins = [
  require("tailwindcss"),
  require("postcss-preset-env"),
  require("autoprefixer"),
  require("cssnano")({
    preset: "default"
  })
];

if (process.env.NODE_ENV === "production") {
  plugins.push(
    purgecss({
      content: ["./components/**/*.js", "./pages/**/*.js"],
      whitelist: ["html", "body"]
    })
  );
}

module.exports = { plugins };
