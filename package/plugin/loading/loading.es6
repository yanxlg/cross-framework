/**
 * Created by yanxlg on 2017/6/19 0019.
 * 获取container的overflow属性，关闭后自动设置回去
 * 使用modal进行处理
 */
import loadingTemp from './loading.art';
class Loading{
    constructor(){
        this.renderEle=$(loadingTemp({}));
        return this;
    }
    show(){
        $("body").append(this.renderEle);
        return this;
    }
    close(){
        this.renderEle.remove();
        return this;
    }
    static show(){
        this.close();
        return new Loading().show();
    }
    static close(){
        $(".loading-plugin").remove();
    }
}
export default Loading;