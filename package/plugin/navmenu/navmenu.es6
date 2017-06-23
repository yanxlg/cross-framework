/**
 * Created by yanxlg on 2017/6/7 0007.
 * 根据屏幕宽度进行调整导航实例
 */
import LeftMenu from './nav-left/nav-left.es6';
import TopMenu from './nav-top/nav-top.es6';
import PopMenu from './nav-pop/nav-pop.es6';
class NavMenu{
    constructor(menus){
        this.menus=menus;
        let width=document.documentElement.offsetWidth;
        if(width<700){
            this.instance=new PopMenu(menus).then(this.callback);
        }else if(width>=700&&width<1080){
            this.instance=new TopMenu(menus).then(this.callback);
        }else{
            this.instance=new LeftMenu(menus).then(this.callback);
        }
        this.resize();
    }
    resize(){
        let addEvent=window.addEventListener?"addEventListener":"attachEvent",$this=this;
        window[addEvent]("resize",function () {
            $this.update();
        });
        return this;
    }
    update(){
        let width=document.documentElement.offsetWidth;
        let newInstance;
        if(width<700){
            if(this.instance.getType()==="PopMenu"){
                return;
            }
            this.instance.destroy();
            //销毁instance
            newInstance=new PopMenu(this.menus).then(this.callback);
            this.instance=newInstance;
            this.callback&&this.callback.call(this,"change");
        }else if(width>=700&&width<=1080){
            if(this.instance.getType()==="TopMenu"){
                return;
            }
            this.instance.destroy();
            newInstance=new TopMenu(this.menus).then(this.callback);
            this.instance=newInstance;
            this.callback&&this.callback.call(this,"change");
        }else{
            if(this.instance.getType()==="LeftMenu"){
                return;
            }
            this.instance.destroy();
            newInstance=new LeftMenu(this.menus).then(this.callback);
            this.instance=newInstance;
            this.callback&&this.callback.call(this,"change");
        }
        return this;
    }
    then(callback){
        this.callback=callback;
        this.instance.then(callback);//初始化
    }
}
export default NavMenu;