let path = require("path"), //path module of node framework
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  //files where it is getting bundle
  webpackConfig = {
    output: {
      path: path.join(__dirname, "/dist"), //dist - distribution
      filename: "index.bundle.js",
    },
    // webpack 5 comes with devServer which loads in development mode
    devServer: {
      port: 9092,
      historyApiFallback: true, //localhost:9092/user
    },
    // Rules of how webpack will take our files, complie & bundle them for the browser
    module: {
      rules: [
        {
          //convert the js file or jsx file into core js
          test: /\.(js|jsx)$/,
          exclude: /nodeModules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
      ],
    },
    //whenever the request comes to the application port 9092, needs to respond with html. The only html in entire react application
    plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
  };

module.exports = webpackConfig;
