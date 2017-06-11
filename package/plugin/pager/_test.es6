/**
 * Created by yanxlg on 2017/6/8 0008.
 * 分页测试
 */
import Pager from './pager.es6';
let pager=new Pager($("body"),9,true).then((index)=>{
    alert(index);
});
pager.setPageIndex(6).setPageCount(7).update();