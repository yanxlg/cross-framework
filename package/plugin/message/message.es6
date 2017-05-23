/**
 * Require Promise
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
 * actions 操作组 [{text:"刷新",icon:"icon-refresh"}]
 */

let message_render = require('./message.art');
const requestAnimationFrame=window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame||function () {
    window.setTimeout(callback, 6000 / 60);
};
let transitionEnd=(()=>{
    let transEndEventNames = {
        WebkitTransition : 'webkitTransitionEnd',
        MozTransition    : 'transitionend',
        OTransition      : 'oTransitionEnd otransitionend',
        transition       : 'transitionend'
    };
    for(let name in transEndEventNames){
        if(typeof document.body.style[name] === "string"){
            return transEndEventNames[name];
        }
    }
})();
const messageInstances=[];
class Message{
    constructor(options,resolve,reject){
        this.message=options.message||"";
        this.type=options.type||"info";
        this.iconClass=options.iconClass||"icon-info";
        this.customClass=options.customClass||"";
        this.duration=options.duration||3000;
        this.showClose=options.showClose||false;
        this.round=options.round||false;
        //actions
        this.actions=options.actions||[];
        this.resolve=resolve;
        this.reject=reject;
        this.create();
        let _this=this;
        requestAnimationFrame(function () {
            _this.show();
        });
        messageInstances.push(this);
    }
    create(){
        let _this=this;
        this._element=$(message_render({
            message:this.message,
            type:this.type,
            iconClass:this.iconClass,
            customClass:this.customClass,
            showClose:this.showClose,
            round:this.round,
            actions:this.actions
        }));
        this._element.on("mouseover",function () {
            _this.stopTimer();
        }).on("mouseleave",function () {
            _this.resumeTimer();
        }).on("click",".message-action",function () {
            _this.resolve("action"+$(this).attr("data-action"));
            _this.close();
        });
        $("body").append(this._element);
    }
    show(){
        let _this=this;
        !_this.startTime&&(_this.startTime=new Date().getTime());
        this._element.removeClass("message-fade-leave");
        //定时器
        this._timer=setTimeout(function () {
            _this.close();
        },this.duration);
    }
    close(){
        //关闭事件会触发
        let _this=this;
        this._element.addClass("message-fade-leave").on(transitionEnd,function () {
            _this._element.remove();
        });
        //触发关闭事件
        this.resolve("close");
    }
    static closeAll(){
        messageInstances.forEach(function (instance) {
            instance.close();
        })
    }
    stopTimer(){
        //停止定时器
        if(this._timer){
            this.endTime=new Date().getTime();
            clearTimeout(this._timer);
        }
    }
    resumeTimer(){
        let _this=this;
        this._timer=setTimeout(function () {
            _this.close();
        },this.duration-(this.endTime-this.startTime));
    }
    static success(options){
        return new Message(options);
    }
}

let message=(options)=>{
    return new Promise((resolve, reject)=>{
        new Message(options,resolve,reject);
    });
};
export default message;

setTimeout(()=>{
    new Promise((resolve, reject)=>{
        new Message({
            message:"测试",
            type:"success",
            iconClass:"icon-success",
            duration:3000,
            showClose:true,
            round:true
        },resolve,reject);
    }).then(function (eventName) {
        alert(eventName);
    })
},2000);
