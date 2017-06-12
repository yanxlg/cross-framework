/**
 * Created by yanxlg on 2017/6/7 0007.
 * 分页器插件
 * 显示9个
 * 添加参数控制是否显示首页 尾页
 */
import pagerTemp from './pager.art';
class Pager{
    constructor(container,count,hideJump){
        this.pageIndex=1;
        this.pageCount=0;
        this.container=container;
        this.count=count||9;
        this.hideJump=hideJump||false;
        this.initLife();
    }
    update(){
        if(this.element){
            let newElement=$(pagerTemp({
                pageCount:this.pageCount,
                pageIndex:this.pageIndex,
                count:this.count,
                hideJump:this.hideJump
            }));
            this.element.replaceWith(newElement);
            this.element=newElement;
        }else{
            this.element=$(pagerTemp({
                pageCount:this.pageCount,
                pageIndex:this.pageIndex,
                count:this.count,
                hideJump:this.hideJump
            }));
            this.container.append(this.element);
        }
        return this;
    }
    setPageIndex(pageIndex){
        this.pageIndex=pageIndex;
        return this;
    }
    setPageCount(pageCount){
        this.pageCount=pageCount;
        return this;
    }
    initLife(){
        //生命周期
        let _this=this;
        this.container.on("click","span",function () {
            let li=$(this).parent();
            if(li.hasClass("disabled")||li.hasClass("active")) return -1;//屏蔽不可点击项
            let pageIndex;
            if(li.hasClass("prev")){
                //当前前一个
                pageIndex=parseInt($(this).parent().siblings(".active").children("span").attr("data-index"))-1;
            }else if(li.hasClass("next")){
                pageIndex=parseInt($(this).parent().siblings(".active").children("span").attr("data-index"))+1;
            }else if(li.hasClass("pager-home")){
                pageIndex=1;
            }else if(li.hasClass("pager-last")){
                pageIndex=_this.pageCount;
            }else{
                pageIndex=parseInt($(this).attr("data-index"));
            }
            _this.pageIndex=pageIndex;
            _this.update();
            _this.callback&&_this.callback.call(_this,pageIndex);
        })
    }
    then(callback){
        this.callback=callback;
        return this;
    }
}
export default Pager;