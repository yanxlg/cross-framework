/**
 * Created by yanxlg on 2017/6/5 0005.
 * 顶部菜单
 * 显示4个，其余的使用展开形式显示
 */
import navTemplate from './nav-top.art';
import NavPop from '../nav-pop/nav-pop.es6';
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
        if(this.menus.length>4){
            //创建nav-pop
            let popMenus=this.menus.slice(4);
            this.navPop=new NavPop(popMenus);
        }
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
            $(".nav-active").removeClass("nav-active");
            $(this).addClass("active").parents().prev(".nav-menu").addClass("active");
            let data=$(this).attr("data-data");
            $this.callback&&($this.callback.call($this,data));
        });
        this.menusRender.on("click",".nav-icon-menu",function () {
            $this.navPop&&$this.navPop.show();
        });
        //滚动监听，当滚动到一定程度的时候背景设置为透明
        $(window).on("scroll.top",function () {
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
    destroy(){
        this.menusRender.remove();
        $("body").removeClass("width-nav-top");
        $(window).off("scroll.top");
        if(this.navPop){
            this.navPop.destroy();
        }
    }
}
export default TopMenu;