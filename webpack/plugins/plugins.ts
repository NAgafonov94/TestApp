import {CONFIG} from "../config";
import {DefinePlugin, HotModuleReplacementPlugin, Plugin, ContextReplacementPlugin} from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlWebpackPlugin({
    template: CONFIG.PATH.SRC + '/index.ejs',
    inject: 'body'
});
const defineWebpackPlugin = new DefinePlugin({
    'PRODUCTION': CONFIG.ENV === 'production',
});
const contextReplacementPlugin = new ContextReplacementPlugin( /angular(\\|\/)core(\\|\/)/, CONFIG.PATH.SRC);
const copyWebpackPlugin = new CopyWebpackPlugin([
    { from: CONFIG.PATH.SRC + '/images/*', to: CONFIG.PATH.DIST + '/images', flatten: true },
    { from: CONFIG.PATH.SRC + '/data/*', to: CONFIG.PATH.DIST + '/data', flatten: true }
]);

const plugins: Plugin[] = [
    htmlPlugin,
    defineWebpackPlugin,
    contextReplacementPlugin
];

CONFIG.ENV === 'development' && plugins.push(new HotModuleReplacementPlugin());
CONFIG.ENV === 'production' && plugins.push(copyWebpackPlugin);

export default plugins;