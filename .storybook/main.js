const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.
    const scssConfigIndex = config.module.rules.findIndex((c) =>
      ".scss".match(c.test)
    );
    /*
    if (scssConfigIndex > 0 && config.module.rules[scssConfigIndex]?.oneOf)
      config.module.rules[scssConfigIndex].oneOf.push({
        test: /\.(css|s(a|c)ss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "../"),
      });
    else
      config.module.rules.push({
        test: /\.(css|s(a|c)ss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "../"),
      });
    */
    // Make whatever fine-grained changes you need
    /*
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            modules: true,
          }
        },
        'sass-loader',
      ],
      include: [
        path.resolve(__dirname, '../'),
        path.resolve(__dirname, '../node_modules'),
      ],
    });
    */

    // Return the altered config
    return config;
  },
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    {
      name: "storybook-addon-sass-postcss",
      options: {
        sassLoaderOptions: {
          implementation: require("sass"),
          options: {
            includePaths: [
              ".",
              "../node_modules/@prudencss/icons-svg",
              "../node_modules/@prudencss/scss",
            ],
            rule: {
              test: /\.(scss|sass)$/i,
            },
          },
        },
      },
    },
  ],
};
