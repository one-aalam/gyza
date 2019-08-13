// const withTM = require('next-transpile-modules');
const path = require('path');
module.exports = {
    webpack: config => {
      // Alias all `react-native` imports to `react-native-web`
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        'react-native$': 'react-native-web'
      }

      // config.module.rules.push({
      //   test: /\.ttf$/,
      //   loader: "url-loader", // or directly file-loader
      //   include: path.resolve(__dirname, "node_modules/@expo/vector-icons/build/vendor/react-native-vector-icons/"),
      // })
  
      return config
    }
  }