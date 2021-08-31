var os = require("os");
const logger = require('hexo-log')();

if(os.platform()==='win32'){
    logger.error('The project only supports UNIX-like systems.');
    process.exit(1);
}