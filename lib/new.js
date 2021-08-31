require("./checkOs");
const childProcess = require("child_process");
const fs = require("fs");
const path = require("path");
const logger = require('hexo-log')();
const i18nList = require("./i18nList");
const readline = require("readline").createInterface(process.stdin,process.stdout);
const translationMap = require("../translationMap.json")

let i18nCachedCategory = null;

logger.error("Under Construction");
process.exit(1);

try{
    for(let p in {"currentDir":"./",...i18nList}){
        logger.info(`Creating: ${p}.`);
        readline.question('Title: ',(title="Untitled")=>{
            let cachedCategory = i18nCachedCategory&&i18nCachedCategory[p]?i18nCachedCategory[p]:null;
            readline.question(cachedCategory?'Category:':`Category (${cachedCategory}):`,(category=cachedCategory)=>{

            });
        })
        childProcess.execFile("hexo",['new'],{
            cwd: i18nList[p],
        });
    }
}catch(e){
    logger.error(e);
}
logger.info("All languages generated.");
