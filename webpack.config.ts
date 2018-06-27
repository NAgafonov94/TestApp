import { CONFIG } from "./webpack/config";
import { config } from "./webpack/webpack";

console.log('########################');
console.log('ENVIRONMENT:', CONFIG.ENV.toUpperCase());
console.log('########################');

export default config;