/**
 * Created by yanxianliang on 2017/5/20.
 */
import fetchApi from '../../../static/fetch.es6';
const HttpSuccessStaatus=/^2\d{2}$/;
let checkStatus=(response)=>{
    if (HttpSuccessStaatus.text(response.status)) {
        return response;
    } else {
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
};

let fetch=(url,data,header)=>{
    let headers=header?()=>{
        header['Content-Type']= 'application/json';
        return header;
    }:{
        'Content-Type': 'application/json'
    };
    let obj=data?{
        method: 'POST',
        headers:headers,
        body:JSON.stringify(data)
    }:{
        method: 'GET',
    };
    return fetchApi(url,obj).then(checkStatus).then((response)=>{
        return response.json();
    });
}
export default fetch;