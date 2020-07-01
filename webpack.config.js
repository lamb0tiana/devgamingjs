const fs = require('fs');
const rimraf = require("rimraf")
const path = require("path");
const CopyPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

rimraf("./dist/images/*",()=>{})


module.exports = {
    mode : "development",
    entry : "./src/app.ts",
    output : {
        path : path.resolve(__dirname,"dist"),
        filename : "bundle.js"
    },
    devtool: "source-map",
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader'
            }
          },
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          { test: /\.tsx?$/, loader: "ts-loader" }
        ]
      },
    plugins: (() =>{
      const testFolder = './assets/images/';
      let plugins = [new UglifyJsPlugin()];
      fs.readdirSync(testFolder).length > 0 ? plugins.push( new CopyPlugin({
          patterns: [
            { from: 'assets/images', to : 'images' },
          ],
        })) : null;
        return plugins;
    })(),
    resolve:{
      extensions: ['.ts','.js']
    }
}