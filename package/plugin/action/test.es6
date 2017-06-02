/**
 * Created by Administrator on 2017/6/2 0002.
 */
import action from './action.es6';
let ac=action({
    actionList:["测试","测试"],
    height:"fit"
}).then((res)=>{
});
setTimeout(()=>{
    ac.show();
},1000);