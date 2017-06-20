/**
 * Require Promise
 * Created by yanxlg on 2017/5/22 0022.
 * 本地存储，包括持久与临时
 * 不同页面存在不同的空间，接入存储时间控制，在get与set的时候会检查存储时间来清理一次
 * location.href 替换成 location.pathname
 * storage事件在当前页面不会广播，调整为当前页面也能接收到广播
 * length() 调整为getLength()  fix mobile UC length hack
 */
let storage=window.localStorage;
let sessionCache=window.sessionStorage;

let encode=(text)=>{
    return encodeURI(encodeURIComponent(encodeURI(text)));
};

let decode=(text)=>{
    return decodeURI(decodeURIComponent(decodeURI(text)));
};
/****
 * 保存体构造器
 */
class Data{
    constructor(val,time){
        return JSON.stringify({
            _val:val,
            _create:new Date().getTime()/1000,
            _save:time?time:-1
        });
    }
}

class Key{
    constructor(key){
        return JSON.stringify({
            _key:key,
            _url:location.pathname
        });
    }
}
class Store{
    static set(key,val,time){
        //检查是否过去，页面单实例处理
        //通过url来区别不容的页面
        //time 保存时间，以s为单位
        let $key=encode(new Key(key));
        let $val=encode(new Data(val,time));
        storage.setItem($key,$val);
    }
    static get(key){
        //获取当前页面的值
        let $key=encode(new Key(key));
        let $data=storage.getItem($key);
        return !$data?(()=>{
            return null;
        })():(()=>{
            $data=decode($data);
            $data=JSON.parse($data);
            if(this.isOverduce($data)){
                storage.removeItem($key);
                return null;
            }else{
                return $data._val
            }
        })();
    }
    static isOverduce(val){
        let _save=val._save;
        return _save===-1?false:()=>{
            let _create=val._create;
            return new Date().getTime()/1000-_create>=_save;
        }
    }
    static remove(key){
        let $key=encode(new Key(key));
        storage.removeItem($key);
    }
    static clear(page){
        //清空当前页面的数据
        !page&&(page=location.pathname);
        this.iterator().then((key,val,$page,$key)=>{
            if($page===page){
                storage.removeItem($key);
            }
        })
    }
    static clearAll(){
        //清空所有数据
        storage.clear();
    }
    static getLength(){
        return storage.length;
    }
    static enabled(){
        return !!storage;
    }
    static iterator(){
        //遍历取的时候也需要判断是否过去
        let $this=this;
        return new Promise((resolve)=>{
            for (let i=0, len = storage.length; i  <  len; i++){
                let $key = storage.key(i);
                let $keyObj=JSON.parse($key);
                let $value = storage.getItem($key);
                let $valObj=JSON.parse($value);
                if($this.isOverduce($valObj)){
                    storage.removeItem($key);
                }else{
                    resolve($this,$keyObj._key,$valObj._val,$keyObj._url,$key);
                    // callback.call($this,$keyObj._key,$valObj._val,$keyObj._url,$key);
                }
            }
        });
    }
}
class Session{
    static set(key,val,time){
        //检查是否过去，页面单实例处理
        //通过url来区别不容的页面
        //time 保存时间，以s为单位
        let $key=encode(new Key(key));
        let $val=encode(new Data(val,time));
        sessionCache.setItem($key,$val);
    }
    static get(key){
        //获取当前页面的值
        let $key=encode(new Key(key));
        let $data=sessionCache.getItem($key);
        return !$data?(()=>{
            return null;
        })():(()=>{
            $data=decode($data);
            $data=JSON.parse($data);
            if(this.isOverduce($data)){
                sessionCache.removeItem($key);
                return null;
            }else{
                return $data._val
            }
        })()
    }
    static isOverduce(val){
        let _save=val._save;
        return _save===-1?false:()=>{
            let _create=val._create;
            return new Date().getTime()/1000-_create>=_save;
        }
    }
    static remove(key){
        let $key=encode(new Key(key));
        sessionCache.removeItem($key);
    }
    static clear(page){
        //清空当前页面的数据
        !page&&(page=location.pathname);
        this.iterator((key,val,$page,$key)=>{
            if($page===page){
                sessionCache.removeItem($key);
            }
        })
    }
    static clearAll(){
        //清空所有数据
        sessionCache.clear();
    }
    static getLength(){
        return sessionCache.length;
    }
    static enabled(){
        return !!sessionCache;
    }
    static iterator(callback){
        //遍历取的时候也需要判断是否过去
        let $this=this;
        callback&&(()=>{
            for (let i=0, len = sessionCache.length; i  <  len; i++){
                let $key = sessionCache.key(i);
                let $keyObj=JSON.parse(decode($key));
                let $value = sessionCache.getItem($key);
                let $valObj=JSON.parse(decode($value));
                if($this.isOverduce($valObj)){
                    sessionCache.removeItem($key);
                }else{
                    callback.call($this,$keyObj._key,$valObj._val,$keyObj._url,$key);
                }
            }
        })();
    }
}
export {Store as store,Session as session,encode,decode};
