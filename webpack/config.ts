const path = require('path');
const ROOT_PATH = process.cwd();

export interface IConfigBuilder {
    ENV: string
    HOST: string
    PORT: number
    PATH: {
        ROOT: string
        NODE_MODULES: string
        SRC: string
        DIST: string
    }
}

export const CONFIG: IConfigBuilder = {
    ENV: process.env.NODE_ENV,
    HOST: 'localhost',
    PORT: 3000,
    PATH: {
        ROOT: ROOT_PATH,
        NODE_MODULES: path.join(ROOT_PATH, '/node_modules'),
        SRC: path.join(ROOT_PATH, '/src'),
        DIST: path.join(ROOT_PATH, '/dist'),
    }
};