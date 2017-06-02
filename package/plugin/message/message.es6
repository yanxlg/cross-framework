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
 *
 *
 *
 * beta 2.0
 * ******* scale模式   zui效果   缩放动画 scale 与opacity同时
 * Promise 不能多次回调，不能用于插件生命周期
 */
import {transition,transitionEnd} from '../../cf-transition.es6';
const messageInstances=new Set();
let message_render = require('./message.art');
class Message{
    constructor(options){
        this.message=options.message||"";
        this.type=options.type||"info";
        this.iconClass=options.iconClass||"icon-info";
        this.customClass=options.customClass||"";
        this.duration=options.duration||3000;
        this.showClose=options.showClose||false;
        this.round=options.round||false;
        //actions
        this.actions=options.actions||[];
        this.scale=options.scale||false;
        this.create();
        let _this=this;
        transition(()=>{
            _this.show();
        });
        messageInstances.add(this);
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
            actions:this.actions,
            scale:this.scale
        }));
        this._element.on("mouseover",()=>{
            _this.stopTimer();
        }).on("mouseleave",()=>{
            _this.resumeTimer();
        }).on("click",".message-action",()=>{
            let index=$(this).attr("data-action");
            _this.callback&&_this.callback(`action${index}`);
            _this.close();
        });
        $("body").append(this._element);
    }
    show(){
        let _this=this;
        !_this.startTime&&(_this.startTime=new Date().getTime());
        this._element.removeClass("message-fade-leave").removeClass("message-push-leave");
        //定时器
        this._timer=setTimeout(()=>{
            _this.close();
        },this.duration);
    }
    close(){
        //关闭事件会触发
        let _this=this;
        this._element.addClass(`${this.scale?'message-push-leave':'message-fade-leave'}`).on(transitionEnd,()=>{
            _this._element.remove();
        });
        //触发关闭事件
        this.callback&&this.callback("close");
    }
    static closeAll(){
        messageInstances.forEach(instance=>{
            instance.close();
            messageInstances.delete(instance);
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
        this._timer=setTimeout(()=>{
            _this.close();
        },this.duration-(this.endTime-this.startTime));
    }
    static success(options){
        return new Message(options);
    }
    then(callback){
        this.callback=callback;
    }
}

let message=(options)=>{
    return new Message(options);
};
export default message;
