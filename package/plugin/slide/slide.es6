/**
 * Created by yanxlg on 2017/6/5 0005.
 * slide插件
 * 需要动态计算展开的大小
 */
class Slide{
    static slideDown(el){
        let child=el.children(),offH=0;
        $.each(child,function (i, ch) {
            offH+=ch.offsetHeight;   //可能更新 不及时，需要从css中读取
        });
        el.css({
            height:offH+"px"
        });
        return offH;
    }
    static slide(el,delY){
        //增量处理
        let offH=el[0].offsetHeight;
        el.css({
            height:offH+delY+"px"
        });
        return offH+delY;
    }
    static slideUp(el){
        let child=el.children(),offH=0;
        $.each(child,function (i, ch) {
            offH+=ch.offsetHeight;   //可能更新 不及时，需要从css中读取
        });
        el.css({
            height:0
        });
        return offH;
    }
}
export default Slide;
