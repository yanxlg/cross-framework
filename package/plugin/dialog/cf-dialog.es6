/**
 * Created by yanxlg on 2017/5/18 0018.
 * fit 位置   高度调整为最佳高度，不是居中，可以控制为居中
 *  dialog 叠加显示   需要控制z-index
 * params
 *      size  大小 默认为lg  sm  full
 *      width  宽度
 *      height 高度
 *      title 标题
 *      showHeader 通过该字段来控制是否显示标题
 *      icon 对话框标题图标    主题图标
 *      position 位置   fit or center                   js控制   参数设置位置
 *      backdrop  遮罩背景
 *      modal  模态非模态
 *      keyboard esc关闭对话框 默认为true
 *      moveable  是否可拖动  默认为false
 *      content 内容
 *      showFooter 是否显示底部
 *      footerBtn  Array[{text:"",themeCss:""}]  底部按钮
 *
 */
import dialogTemplate from './dialog.art';
import IDGenerator from '../../cf-idGenerator.es6';
import {transition,transitionEnd} from '../../cf-transition.es6';
import Drag from '../../cf-drag.es6';

const DIALOG_DEFAULT_OPTION={
    size:"normal",
    width:"",
    height:"",
    title:"",
    showHeader:true,
    icon:"",
    position:"fit",
    backdrop:true,
    modal:false,
    keyboard:true,
    moveable:true,
    content:"<p>这是Dialog默认内容，需要使用其他内容来替换</p>",
    showFooter:true,
    footerBtn:false
};

class Dialog{
    constructor(options){
        options=options||{};
        this.size=options.size||DIALOG_DEFAULT_OPTION.size;
        this.width=options.width||DIALOG_DEFAULT_OPTION.width;
        this.height=options.height||DIALOG_DEFAULT_OPTION.height;
        this.title=options.title||DIALOG_DEFAULT_OPTION.title;
        this.showHeader=options.showHeader||DIALOG_DEFAULT_OPTION.showHeader;
        this.icon=options.icon||DIALOG_DEFAULT_OPTION.icon;
        this.position=options.position||DIALOG_DEFAULT_OPTION.position;
        this.backdrop=options.backdrop||DIALOG_DEFAULT_OPTION.backdrop;
        this.modal=options.modal||DIALOG_DEFAULT_OPTION.modal;
        this.keyboard=options.keyboard||DIALOG_DEFAULT_OPTION.keyboard;
        this.moveable=options.moveable||DIALOG_DEFAULT_OPTION.moveable;
        this.content=options.content||DIALOG_DEFAULT_OPTION.content;
        this.showFooter=options.content||DIALOG_DEFAULT_OPTION.showFooter;
        this.footerBtn=options.footerBtn||DIALOG_DEFAULT_OPTION.footerBtn;
        this.id=IDGenerator.uuid();
        this.create().show();
    }
    create(){
        let _this=this;
        this._element=$(dialogTemplate({
            size:this.size,
            width:this.width,
            height:this.height,
            title:this.title,
            showHeader:this.showHeader,
            icon:this.icon,
            position:this.position,
            backdrop:this.backdrop,
            content:this.content,
            showFooter:this.showFooter,
            footerBtn:this.footerBtn,
            moveable:this.moveable,
            id:this.id
        }));
        if(!this.modal){
            this._element[0].onclick=(event)=>{
                let target=event.srcElement||event.target;
                if(target.className.search(/modal/gi)>=0){
                    //关闭当前dialog
                    _this.close();
                }
            };
        }
        if(this.keyboard){
            //键盘esc按键关闭
            $(window).on("keydown."+this.id,function (e) {
                let code=e.keyCode||e.which;
                if(code===27){
                    _this.close();
                }
            })
        }
        this.initMove();
        this.initEvent();
        return this;
    }
    initPos(){
        //position设置
        let _h=$(this._element[0]).find(".dialog").outerHeight();
        let win_h=window.screen.availHeight;
        let half = Math.max(0, (win_h -_h) / 2),top;
        switch (this.position){
            case "fit":
                //中间偏上
                top=half * 2 / 3;
                break;
            case "center":
                top=half;
                break;
            case "top":
                top=4;
                break;
            case "bottom":
                top=win_h-_h-4;
                break;
            case parseInt(this.position):
                //数字
                top=parseInt(this.position);
                break;
            default:
                top=half * 2 / 3;
                break;
        }
        $(this._element[0]).find(".dialog").css({
            "margin-top":top+"px"
        })
    }
    initMove(){
        if(this.moveable){
            this.dragInstance=new Drag($(this._element[0]).find(".dialog")[0],{
                container: $(this._element[0]),
                handle: '.dialog-header',
                before: function() {
                    $(this._element[0]).find(".dialog").css('position', 'absolute');
                },
                finish: function(e) {
                }
            });
        }
    }
    initEvent(){
        let _this=this;
        $(this._element[0]).on("click","[data-operation]",function () {
            let operation=$(this).attr("data-operation");
            if(operation==="cancel") _this.close();
            _this.callback&&_this.callback.call(_this,`operation_${operation}`);
        });
        $(this._element[0]).on("click",".icon-close",function () {
            _this.close();
        });
    }
    show(){
        let _this=this;
        $("body").append(this._element);
        this.initPos();
        transition(()=>{
            _this._element.addClass("in");
        });
        return this;
    }
    close(){
        let _this=this;
        transition(()=>{
            _this.callback&&_this.callback.call(_this,"closeStart");
            _this._element.removeClass("in").on(transitionEnd,function () {
                _this._element.remove();
                $(window).off("keydown."+_this.id);
                if(_this.dragInstance){
                    _this.dragInstance.destroy();
                }
                _this.callback&&_this.callback.call(_this,"closeEnd");
            });
        })
    }
    then(callback){
        this.callback=callback;
    }
}
let dialog=(options)=>{
    return new Dialog(options);
};

window.alert=(msg,title)=>{
    title=title||"懂老板";
    return dialog({
        title:title,
        content:msg,
        modal:false
    }).then(function(){
        this.close();
    });
};
export default dialog;
