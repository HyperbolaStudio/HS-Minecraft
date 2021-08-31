require("./checkOs");
var childProcess = require("child_process");
var fs = require("fs");
var path = require("path");
const logger = require('hexo-log')();
var i18nList = require("./i18nList");

require("./generateTranslationIndex");

try{
    for(let p in {"currentDir":"./",...i18nList}){
        logger.info(`Generating: ${p}.`);
        childProcess.execSync("hexo g",{
            cwd: i18nList[p],
        });
        if(p==="currentDir")continue;
        childProcess.execFileSync('rm',['-r','-f',
            path.join("./","public",p)]
        );
        childProcess.execFileSync('cp',['-r',
            path.join(i18nList[p],"public"),
            path.join("./","public",p)]
        );
    }
}catch(e){
    logger.error(e);
}
logger.info("All languages generated.");
