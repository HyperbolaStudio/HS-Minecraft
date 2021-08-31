require('./checkOs');
const yaml = require('js-yaml');
const fs = require('fs');

const translationIndex = yaml.load(fs.readFileSync('translation_index.yml')).translation_index;
let translationMap = {category:{},tag:{}};
for(let entry of translationIndex){
    for(let lang in entry.i18n){
        if(!translationMap[entry.type][lang])translationMap[entry.type][lang]={};
        translationMap[entry.type][lang][entry.i18n[lang]]=entry.i18n;
    }
}
fs.writeFileSync('translationMap.json',JSON.stringify(translationMap));
