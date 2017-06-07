/**
 * Created by yanxlg on 2017/6/7 0007.
 * sass @import中路径问题
 */
var through=require("through2");
module.exports=function (modify) {
    return through.obj(function(file, endcoding, callback) {
        if(file.isNull()) {
            this.push(file)
            return callback()
        }

        if(file.isStream()) {
            return callback()
        }

        var content = file.contents.toString()

        content = modify(content, file.path) || content

        file.contents = new Buffer(content)
        this.push(file)
        callback()
    })
};