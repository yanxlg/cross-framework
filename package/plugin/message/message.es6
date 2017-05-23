/**
 * Created by yanxlg on 2017/5/22 0022.
 * 消息显示
 * 参数控制是否堆叠  与toast有区别
 * message	消息文字	string	—	—
 * type	主题	string	default/primary/success/warning/info/error	info
 * iconClass	自定义图标的类名 string	—	—
 * customClass	自定义类名	string	—	—
 * duration	显示时间, 毫秒。设为 0 则不会自动关闭	number	—	3000
 * showClose	是否显示关闭按钮	boolean	—	false
 * onClose	关闭时的回调函数, 参数为被关闭的 message 实例	function	—	—
 * round 是否全圆角
 */

let template = require('art-template');
let html = template( '/message.art', {
    user: {
        name: 'aui'
    }
});

class Message{
    constructor(options){
        this.message=options.message||"";
        this.type=options.type||"info";
        this.iconClass=options.iconClass||"icon-info";
        this.customClass=options.customClass||"";
        this.duration=options.duration||3000;
        this.showClose=options.showClose||false;
        this.round=options.round||false;
        this.create();
    }
    create(){
        let messageHtml='<div class="message info"><i class="icon icon-info"></i><div class="message-group"><p>消息内容消息内容</p></div></div>';

    }
    close(){

    }
    static closeAll(){

    }
    static success(options){
        return new Message(options);
    }
}