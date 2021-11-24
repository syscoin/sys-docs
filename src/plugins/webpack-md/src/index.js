

module.exports = function (context, options) {
  return {
    name: 'webpack-md',
    configureWebpack(config, isServer, utils) {
      const {getCacheLoader} = utils;
      console.log(config.module.rules)
      /*
      config.module.rules.push(

            {
              test: /\.md$/,
              use: [ {loader: 'remark-loader'} ],
            });*/
      return config;
    },
  };
};
