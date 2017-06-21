/**
 * Created by yanxlg on 2017/6/2 0002.
 * 导航菜单
 * 默认根据屏幕大小切换显示方式，大屏显示在左侧 中屏显示在顶部 小屏顶部折叠 右侧显示（支持左侧侧滑）
 * options 支持参数
 * left：菜单header的icon显示在左侧
 * 菜单循环嵌套,一个菜单项是一个object
 * menus:[{pMenu:{},menuList:[{groupName:"",menus:[]},{},{}]},{}}
 * 分组信息 group menus:{groupName:"",menus:[]}
 * 一组菜单：[]
 * 支持三层结构
 * {
 *  name:"",
 *  data:obj
 *  childMenus:[{
 *      groupName:"",
 *      menus:[{
*           name:"",
*           data:obj,
*           childMenus:[]
 *      }]
 *  }]
 * }
 *
 *
 * 打开的时候收起其他的
 */
import navTemplate from './nav-pop.art';
import Slide from '../../slide/slide.es6';
class PopMenu{
    constructor(menus,left){
        this.menus=menus;
        this.left=left||false;
        this.create();
        this.initLife();
    }
    getType(){
        return "PopMenu";
    }
    create(){
        this.menusRender=$(navTemplate({
            menus:this.menus,
            left:this.left
        }));
        $("body").addClass("width-nav-left").append(this.menusRender);
    }
    initLife(){
        let _this=this;
        this.menusRender.on("click",".nav-menu",function () {
            let $this=$(this);
            if($this.next().hasClass("slide")){
                if($this.next().hasClass("open")){
                    $this.removeClass("open").next().removeClass("open");
                    let addH=Slide.slideUp($this.next());
                    let parentSlide=$this.parents(".slide");
                    $.each(parentSlide,function (i, slide) {
                        $(slide).addClass("open").prev().addClass("open");
                        Slide.slide($(slide),-addH);
                    })
                }else{
                    //这样会造成父级元素高度变化
                    //fix it
                    //需要关闭其他父级菜单中已经打开的
                    let others=$this.parent().siblings();//li元素
                    $.each(others,function (i, li) {
                        let slide=$(li).children(".slide");
                        if(slide.hasClass("open")){
                            slide.removeClass("open").prev().removeClass("open");
                            Slide.slideUp(slide);
                            //关闭子的
                            let childSlide=slide.find(".slide");
                            $.each(childSlide,function (i, mSlide) {
                                $(mSlide).removeClass("open").prev().removeClass("open");
                                Slide.slideUp($(mSlide));
                            });
                        }
                    });
                    $this.addClass("open").next().addClass("open");
                    let addH=Slide.slideDown($this.next());
                    let parentSlide=$this.parents(".slide");
                    $.each(parentSlide,function (i, slide) {
                        $(slide).addClass("open").prev().addClass("open");
                        Slide.slide($(slide),addH);
                    });
                }
            }else{
                $(".nav-active").removeClass("nav-active");
                $(".nav-menu.active").removeClass("active");
                //...添加样式
                $(".nav-icon-menu").addClass("nav-active");
                $this.addClass("nav-active");
                let data=$this.attr("data-data");
                _this.callback&&(_this.callback.call(_this,data));
                _this.close();
            }
        });
        this.menusRender.on("click",".nav-icon-menu",function () {
            _this.show();
        });
        this.menusRender.on("click",".modal-backdrop",function () {
            _this.close();
        });
        $(window).on("scroll.pop",function () {
            _this.updateBg();
        })
    }
    updateBg(){
        if(!this.bg){
            let bgColor=this.menusRender.find(".nav-header").css("background-color");
            //正则解析出三段int值
            this.bg=bgColor.match(/\d+/g);
        }
        let scrolltop=document.documentElement.scrollTop||document.body.scrollTop;
        let opacity=1-Math.round(scrolltop/100)/10;//背景调整
        this.menusRender.find(".nav-header").css({
            "background-color":`rgba(${this.bg[0]},${this.bg[1]},${this.bg[2]},${opacity})`
        });
    }
    show(){
        this.menusRender.find(".nav-pop").addClass("show");
        this.menusRender.find(".modal-backdrop").addClass("in");
    }
    close(){
        this.menusRender.find(".nav-pop").removeClass("show");
        this.menusRender.find(".modal-backdrop").removeClass("in");
    }
    then(callback){
        this.callback=callback;
    }
    destroy(){
        this.menusRender.remove();
        $("body").removeClass("width-nav-left");
        $(window).off("scroll.pop");
    }
}

export default PopMenu;