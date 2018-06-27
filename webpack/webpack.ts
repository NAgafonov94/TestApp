import {CONFIG} from "./config";
import plugins from "./plugins/plugins";
import {devServer} from "./devServer/devServer";
import {rules} from "./rules/rules";
import { Configuration } from "webpack";

const mode = CONFIG.ENV === "production" ? "production" : "development";
const entry = CONFIG.PATH.SRC + '/main.ts';
const output = {
    path: CONFIG.PATH.DIST,
    filename: 'build.js'
};
const resolve = {
    modules: [
        CONFIG.PATH.NODE_MODULES,
        CONFIG.PATH.SRC
    ],
    extensions: [".js", ".json", ".jsx", ".css", ".ts"],
};

export const config: Configuration = {
    mode,

    output,

    entry,

    module: { rules },

    plugins,

    resolve,

    devServer
};