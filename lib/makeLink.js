require("./checkOs");
const childProcess = require("child_process");
const path = require("path");
const i18nList = require("./i18nList");

const copyList = ['node_modules','scaffolds','themes','package.json','package-lock.json'];
for(let lang in i18nList){
    childProcess.execFileSync('mkdir',['-p',
        path.join(i18nList[lang])]
    );
    for(let file of copyList){
        childProcess.execFileSync('ln',['-s','-f',
            path.join('../','hsmc',file),
            path.join(i18nList[lang],file)]
        );
    }
    childProcess.execFileSync('ln',['-s','-f',
        path.join('../','hsmc',`source_${lang}`),
        path.join(i18nList[lang],'source')]
    );
    childProcess.execFileSync('ln',['-s','-f',
        path.join('../','hsmc',`_config.${lang}.yml`),
        path.join(i18nList[lang],'_config.yml')]
    );
    childProcess.execFileSync('ln',['-s','-f',
        path.join('../','hsmc',`_config.icarus.${lang}.yml`),
        path.join(i18nList[lang],'_config.icarus.yml')]
    );

}