import message from '../message.es6';
setTimeout(()=>{
    message({
        message:"测试",
        type:"success",
        iconClass:"icon-success",
        duration:3000,
        showClose:true,
        round:true
    })
},2000);