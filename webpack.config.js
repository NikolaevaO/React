const path = require ("path");

module.exports = {
  entry: "./src/app.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.css/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  devServer: {
  //для правильн. работы сервера, чтобы он всегда возвращал index.html файл,
  //не зависимо от запроса пользователя
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "dist")
  }
}