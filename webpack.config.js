const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // If you increase this by 1, yarn test/build will work
  parallelism: 1,
  resolve: {
    extensions: [".ts", ".js", ".css"],
  },
  plugins: [new MiniCssExtractPlugin({
    // If you disable this yarn test/build will work
    experimentalUseImportModule: true,
  })],
  module: {
    rules: [
      {
        test: /\.ts$/i,
        use: ["ts-loader"],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
};
