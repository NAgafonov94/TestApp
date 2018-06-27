import {CONFIG} from "../config";
import {Rule} from "webpack";

export const rules: Rule[] = [{
    test: /\.scss$/,
    exclude: CONFIG.PATH.NODE_MODULES,
    use: [{
        loader: 'style-loader',
    },{
        loader: 'css-loader',
        options: {
            importLoaders: 1,
        }
    },{
        loader: 'postcss-loader'
    }]
}, {
    test: /\.css$/,
    include: CONFIG.PATH.NODE_MODULES,
    use: [{
        loader: 'style-loader',
    },{
        loader: 'css-loader',
        options: {
            importLoaders: 1,
        }
    }]
}, {
    test: /\.html$/,
    loader: 'raw-loader'
}, {
    test: /\.ts$/,
    use: [{
        loader: 'ts-loader'
    }, {
        loader: 'angular2-template-loader'
    }],
    exclude: /node_modules/
}];