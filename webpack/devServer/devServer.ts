import {CONFIG} from "../config";

export const devServer = {
    contentBase: CONFIG.PATH.SRC,
    publicPath: '/',
    port: CONFIG.PORT,
    host: CONFIG.HOST,
    filename: 'build.js',
    hot: true,
    inline: true,
    compress: false,
    historyApiFallback: true
};