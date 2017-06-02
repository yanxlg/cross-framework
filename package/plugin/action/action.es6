/**
 * Created by yanxlg on 2017/5/31 0031.
 * 底部弹出界面
 * 高度自动计算   height==='fit'
 * 非模态
 * 关闭会销毁，dom需要自己保存
 */
import actionTemplate from './action.art';
import IDGenerator from '../../cf-idGenerator.es6';
import {transition,transitionEnd} from '../../cf-transition.es6';
class Action{
    constructor (option){
        this.content=option.content;
        this.id=IDGenerator.uuid();
        this.backdrop=option.backdrop||true;
        this.height=option.height;//支持数字
        if(isNaN(this.height)){
            this.size=this.height||"normal";
            this.height=null;
        }
        this.create();
        this.initLife();
    }
    create(){
        this.el=$(actionTemplate({
            content:this.content,
            id:this.id,
            backdrop:this.backdrop,
            height:this.height,
            size:this.size
        }));
        $("body").append(this.el);
        if(this.size==="fit"){
            //自动计算高度并进行设置，控制最大高度为normal的高度
            let actionEl=$(this.el).eq(0);
            let contentHeight=$(this.el).eq(0).outerHeight();//高度需要计算
            if(window.screen.availHeight<767){
                actionEl.css({
                    "max-height":window.screen.availHeight*0.8+"px"
                })
            }else{
                actionEl.css({
                    "max-height":"600px"
                })
            }
        }
    }
    initLife(){
        let _this=this;
        this.el.on("click",(event)=>{
            let target=event.srcElement||event.target;
            if($(target).hasClass("modal-backdrop")){
                _this.close();
            }
        })
    }
    show(){
        let _this=this;
        transition(()=>{
            _this.el.addClass("in");
        });
    }
    close(){
        let _this=this;
        transition(()=>{
            _this.el.removeClass("in").on(transitionEnd,()=>{
                _this.el.remove();
            });
        });
    }
}
let action=(options)=>{
    return new Action(options);
};

let ac=action({
    content:"555555",
    height:"fit"
});
setTimeout(()=>{
    ac.show();
},1000);
export default action;