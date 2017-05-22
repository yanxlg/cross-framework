//所有的以-es6命名的js
let path = require('path');
let webpack = require('webpack');
let fs = require('fs'),fstat = fs.stat;
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

let entries={};
function createEntries(dir, root) {
    let directory = path.join(__dirname, root, dir);
    fs.readdirSync(directory).forEach(function (file) {
        let fullpath = path.join(directory, file);
        let stat = fs.statSync(fullpath);
        if(stat.isFile()){
            if(fullpath.indexOf("-es6")>0){
                let name = path.join(dir, path.basename(file).replace("-es6.js",""));
                entries[name] = fullpath+"?entry=true"
            }
        }else if(stat.isDirectory()){
            let subdir = path.join(dir, file);
            createEntries(subdir, root);
        }
    });
}
createEntries('./', 'Package');

module.exports = {
    entry: entries, //代表入口(总)文件，可以写多个
    output: {
        path: path.resolve('./dist'), //输出文件夹 新版本webpackx需要绝对路径，从项目根目录开始/cross-framework/dist
        filename: "[name].js" //最终打包生成的文件名
    },
    module: {
        loaders: [
            {
                test: /-es6\.js$/, //是一个正则，代表js或者jsx后缀的文件要使用下面的loader
                loader: "babel-loader",
                query: {presets: ['es2015']}
            }
        ]
    },
    plugins: [
        new UglifyJSPlugin({
            compress: {
                warnings: false
            },
            mangle:false,
            beautify:true
        })
    ]
};