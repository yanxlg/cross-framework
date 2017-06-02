/**
 * Created by yanxlg on 2017/6/2 0002.
 * 导航菜单
 * 默认根据屏幕大小切换显示方式，大屏显示在左侧 中屏显示在顶部 小屏顶部折叠 右侧显示（支持左侧侧滑）
 * options 支持参数
 * force:""  强制以某种方式显示
 * 菜单循环嵌套,一个菜单项是一个object
 * menus:[{pMenu:{},menuList:[{groupName:"",menus:[]},{},{}]},[],[],[],[],[],[]]
 * 分组信息 group menus:{groupName:"",menus:[]}
 * 一组菜单：[]
 * 支持三层结构
 */
import navTemplate from './navmenu.art';
class LeftMenu{
    constructor(options){
        this.options=options;
    }
    create(){

    }
}