module.exports = function override(config, env) {
    config.module.rules.push({
      test: /\.js$/,
      exclude: /node_modules[/\\](?!react-native-vector-icons)/,
      use: {
        loader: "babel-loader",
        options: {
          // Disable reading babel configuration
          babelrc: false,
          configFile: false,

          // The configration for compilation
          presets: [
            ["@babel/preset-env", { useBuiltIns: "usage" }],
            "@babel/preset-react",
            "@babel/preset-flow"
          ],
          plugins: [
            "@babel/plugin-proposal-class-properties",
            "@babel/plugin-proposal-object-rest-spread"
          ]
        }
      }
    });
  
    return config;
  };

// const path = require('path');

// // eslint-disable-next-line no-unused-vars
// module.exports = function override(config, env) {
//   config.module.rules.push({
//     test: /\.ttf$/,
//     loader: 'file-loader',
//     include: path.resolve(__dirname, './static/media/[name].[ext]'),
//   });

//   return config;
// };