/**
 * Created by yanxlg on 2017/6/5 0005.
 * 顶部菜单
 */
import navTemplate from './nav-top.art';
class TopMenu{
    constructor(menus){
        this.menus=menus;
        this.create();
        this.initLife();
    }
    getType(){
        return "TopMenu";
    }
    create(){
        this.menusRender=$(navTemplate({
            menus:this.menus
        }));
        $("body").addClass("width-nav-top").append(this.menusRender);
        this.updateBg();
    }
    initLife(){
        let $this=this;
        this.menusRender.on("mouseover",".nav-right > li",function () {
            $(this).children(".nav-menu").addClass("hover");
        });
        this.menusRender.on("mouseout",".nav-right > li",function () {
            $(this).children(".nav-menu").removeClass("hover");
        });
        this.menusRender.on("click",".nav-menu",function () {
            //如果有子菜单项则不执行
            if($(this).next().length>0){
                return;
            }
            $this.menusRender.find(".active").removeClass("active");
            $(this).addClass("active").parents().prev(".nav-menu").addClass("active");
            let data=$(this).attr("data-data");
            $this.callback&&($this.callback.call($this,data));
        });
        //滚动监听，当滚动到一定程度的时候背景设置为透明
        $(window).on("scroll",function () {
            //500像素透明
            $this.updateBg();
        })
    }
    updateBg(){
        if(!this.bg){
            let bgColor=this.menusRender.css("background-color");
            //正则解析出三段int值
            this.bg=bgColor.match(/\d+/g);
        }
        let scrolltop=document.documentElement.scrollTop||document.body.scrollTop;
        let opacity=1-Math.round(scrolltop/100)/10;//背景调整
        this.menusRender.css({
            "background-color":`rgba(${this.bg[0]},${this.bg[1]},${this.bg[2]},${opacity})`
        });
    }
    then(callback){
        this.callback=callback;
    }
}
export default TopMenu;