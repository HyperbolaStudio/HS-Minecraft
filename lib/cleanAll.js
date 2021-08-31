require("./checkOs");
var childProcess = require("child_process");
const logger = require('hexo-log')();
var i18nList = require("./i18nList");

try{
    for(let p in {"currentDir":"./",...i18nList}){
        logger.info(`Cleaning: ${p}.`);
        childProcess.execSync("hexo clean",{
            cwd: i18nList[p],
        });
    }
}catch(e){
    logger.error(e);
}
logger.info("All languages cleaned.");
