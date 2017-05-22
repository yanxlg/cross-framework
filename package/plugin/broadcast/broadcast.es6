/**
 * Created by yanxlg on 2017/5/22 0022.
 * 广播事件，不同页面之间进行数据传递，本质是storage的事件，修复当前界面接收问题
 */
import {store,decode} from '../store/store.es6';
import Promise from '../../../static/Promise.es6';

let addEvent= window.addEventListener||window.attachEvent;

class Broadcast{
    static sendEvent(eventName,eventData){
        //当前页面不会触发，值相同不会触发  fix
        store.set(eventName,eventData);
        this.dispatch(eventName,eventData);//当前页面触发
    }
    static registerEvent(){
        //当前页面中需要实现监听
        let p=new Promise(()=>{
            addEvent("storage",function (ev) {
                let $key=JSON.parse(decode(ev.key))._key;
                let $val=JSON.parse(decode(ev.newValue))._val;
                resolve($key,$val);
            })
        });
        this.promiseArr=this.promiseArr||[];
        this.promiseArr.push(p);
        return p;
    }
    static dispatch(eventName,eventData){
        //处理方法
        if(this.promiseArr){
            this.promiseArr.forEach((promise)=>{
                promise.resolve(eventName,eventData);
            })
        }
    }
}

export default Broadcast;
