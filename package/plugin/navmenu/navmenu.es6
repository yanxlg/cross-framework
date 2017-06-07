/**
 * Created by yanxlg on 2017/6/7 0007.
 * 根据屏幕宽度进行调整导航实例
 */
import LeftMenu from './nav-left/nav-left.es6';
import TopMenu from './nav-top/nav-top.es6';
import PopMenu from './nav-pop/nav-pop.es6';
class NavMenu{
    constructor(menus){
        let width=window.screen.availWidth;
        let ratio=window.devicePixelRatio;
        if(width/ratio<450){
            this.instance=new PopMenu(menus);
        }else if(width/ratio>=450&&width/ratio<700){
            this.instance=new TopMenu(menus);
        }else{
            this.instance=new LeftMenu(menus);
        }
        this.resize();
        return this.instance;
    }
    resize(){
        let addEvent=window.addEventListener?"addEventListener":"attachEvent";
        window[addEvent]("resize",function () {
            alert("1");
        })
    }
}
export default NavMenu;