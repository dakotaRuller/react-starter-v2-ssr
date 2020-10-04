const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

const sass = {
  test: /\.scss?$/,
  use: [
    'style-loader', // creates style nodes from JS strings
    'css-loader', // translates CSS into CommonJS
    'sass-loader', // compiles Sass to CSS, using Node Sass by default
  ],
};

const css = {
  test: /\.css?$/,
  use: ['style-loader', 'css-loader'],
};

module.exports = {
  webpack: (config, arguments) => {
    const { buildId, isDev, isSever, webpack } = arguments;
    // console.log("config pre push: ", config.module.rules);
    // config.module.rules.push(css);
    // config.module.rules.push(sass);
    // console.log("config post push: ", config.module.rules[1].oneOf);
    return config;
  },
};
