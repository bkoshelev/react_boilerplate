const PostCssNormalize = require('postcss-normalize');
const PostCssNested = require('postcss-nested');
const PostCssAutoprefixer = require('autoprefixer');
const PostCssAutoreset = require('postcss-autoreset');
const PostCssPresetEnv = require('postcss-preset-env');

module.exports = {
  plugins: [
    PostCssNormalize({}),
    PostCssNested(),
    PostCssAutoprefixer(),
    PostCssAutoreset(),
    PostCssPresetEnv(),
    //    require('postcss-uncss')({ html: ['index.html'] }),
    //   require('postcss-media-minmax')(),
  ],
};
