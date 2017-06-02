/**
 * Created by yanxlg on 2017/5/31 0031.
 * 底部弹出界面
 * 高度自动计算   height==='fit'
 * 非模态
 * 关闭会销毁，dom需要自己保存
 * actionList:["","",""]
 */
import actionTemplate from './action.art';
import actionBtnTemplate from './action_btn.art';
import IDGenerator from '../../cf-idGenerator.es6';
import {transition,transitionEnd} from '../../cf-transition.es6';
class Action{
    constructor (option){
        this.content=option.content;
        this.actionList=option.actionList;//actionList与content只有一个生效 actionList存在就屏蔽content
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
        if(this.actionList&&this.actionList.length>0){
            this.content=actionBtnTemplate({
                actionList:this.actionList
            })
        }
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
            if($(target).hasClass("modal-backdrop")||$(target).hasClass("action-cancel")){
                _this.close();
            }
            if($(target).hasClass("action-btn")){
                let index=$(target).attr("data-action-index");
                if(index){
                    this.callback&&this.callback.call(this,`action-btn${index}`);
                    this.close();
                }
            }
        })
    }
    show(){
        let _this=this;
        this.callback&&this.callback.call(this,"show");
        transition(()=>{
            _this.el.addClass("in");
        });
    }
    close(){
        let _this=this;
        this.callback&&this.callback.call(this,"close");
        transition(()=>{
            _this.el.removeClass("in").on(transitionEnd,()=>{
                _this.el.remove();
            });
        });
    }
    then(callback){
        this.callback=callback;
        return this;
    }
}
let action=(options)=>{
    return new Action(options);
};

export default action;