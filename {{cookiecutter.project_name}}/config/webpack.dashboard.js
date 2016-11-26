/**
 * @author: @AngularClass
 */

const webpackMerge = require('webpack-merge'); // used to merge webpack configs
const devConfig = require('./webpack.dev.js'); // the settings that are common to prod and dev
const DashboardPlugin = require('webpack-dashboard/plugin');

/**
 * Webpack configuration
 *
 * See: http://webpack.github.io/docs/configuration.html#cli
 */
module.exports = webpackMerge(devConfig, {
  plugins: [
    /*
     * Plugin: DashboardPlugin
     * Description: nicer webpack outupt
     */
    new DashboardPlugin()
  ]
});
