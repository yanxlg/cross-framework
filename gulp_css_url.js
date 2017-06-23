/**
 * Created by yanxlg on 2017/6/7 0007.
 * gulp 插件 对css sass less 中url的处理
 */
let path = require('path');
let modifyStreamContent=require("./modifyStreamContent.js");

function matchAll(str, reg) {
    let res = [],match;
    while(match = reg.exec(str)) {
        res.push(match)
    }
    return res;
}
module.exports=function () {
    return modifyStreamContent((content, filePath) => {
        let matches = matchAll(content, /url\((\S+?)\)/gi);
        let currentDir = path.dirname(filePath);
        if(matches instanceof Array) {
            matches.forEach(match => {
                let url = match[1];
                if(!/^"?\//g.test(url)) {
                    //Todo 如果是相对路径则不进行处理
                    return;
                }
                let file = __dirname+url.replace(/'/g, "").replace(/"/g, "");
                let originalPath = path.resolve(currentDir, file);
                let relative = path.relative(currentDir, originalPath);
                let res = relative.replace(/\\/g, "/");
                content = content.replace(url, '"./'+res+'"');
            })
        }
        return content;
    })
};
