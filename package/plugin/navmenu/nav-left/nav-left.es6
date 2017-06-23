/**
 * Created by yanxlg on 2017/6/2 0002.
 * 导航菜单
 * 默认根据屏幕大小切换显示方式，大屏显示在左侧 中屏显示在顶部 小屏顶部折叠 右侧显示（支持左侧侧滑）
 * options 支持参数
 * force:""  强制以某种方式显示
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
import navTemplate from './nav-left.art';
import Slide from '../../slide/slide.es6';
class LeftMenu{
    constructor(menus){
        this.menus=menus;
        this.create();
        this.initLife();
    }
    getType(){
        return "LeftMenu";
    }
    create(){
        this.menusRender=$(navTemplate({
            menus:this.menus
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
                $this.addClass("nav-active");
                let data=$this.attr("data-data");
                _this.callback&&(_this.callback.call(_this,data));
            }
        });
    }
    then(callback){
        this.callback=callback;
        return this;
    }
    destroy(){
        this.menusRender.remove();
        $("body").removeClass("width-nav-left");
    }
}

export default LeftMenu;