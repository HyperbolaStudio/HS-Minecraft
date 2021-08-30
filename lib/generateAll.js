var childProcess = require("child_process");
var fs = require("fs");
var path = require("path");
const logger = require('hexo-log')();
var i18nList = require("./i18nList");

function generateAll(){
    try{
        for(let p in {"currentDir":"./",...i18nList}){
            logger.info(`Generating: ${p}.`);
            childProcess.execSync("hexo g",{
                cwd: i18nList[p],
                stdio: 'pipe',
            });
            if(p==="currentDir")continue;
            if(fs.existsSync(path.join("./","public",p)))fs.unlinkSync(path.join("./","public",p));
            fs.symlinkSync(path.join("../",i18nList[p],"public"),path.join("./","public",p));
        }
    }catch(e){
        logger.error(e);
    }
    logger.info("All languages generated.");
}
generateAll();

module.exports = generateAll;