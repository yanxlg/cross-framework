/**
 * Created by yanxianliang on 2017/5/20.
 */
import fetchApi from '../../../static/fetch.es6';
import {store} from '../store/store.es6';
import dialog from '../dialog/cf-dialog.es6';
/*const HttpSuccessStaatus=/^2\d{2}$/;
let checkStatus=(response)=>{
    if (HttpSuccessStaatus.test(response.status)) {
        return response;
    } else {
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
};*/

class THENCLASS{
    constructor(){
        return this;
    }
    then(){
        return this;
    }
}

let fetch=(url,data,login)=>{
    if(arguments.length===2){
        login=true;//不设置默认为true,即需要登录
    }
    let user=store.get("_user"),token="";
    if(user){
        user=JSON.parse(user);
        token=user.token;
    }
    if(data){
        if(login&&!token){
            dialog({
                title:"未登录提示",
                content:"请先登录后再执行该操作",
                modal:false
            }).then(function(){
                this.close();
            });
            return new THENCLASS();
        }
        return fetchApi(url,{
            method: 'POST',
            headers:{
                token:token,
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                Content: data,
                Head: {
                    "AppType":4,"ApiType": "1",
                    "AppVersion": "1.3.4",
                    "ApiVersion": "1.3.4",
                    "Token": token
                }
            })
        }).then(response=>{
            return response.json();
        })
    }else{
        //get 方法
        return fetchApi(url,{
            method: 'GET',
            headers:{
                token:token
            }
        }).then(response=>{
            return response.json();
        })
    }
};
export default fetch;