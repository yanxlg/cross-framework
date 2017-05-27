/**
 * Created by yanxlg on 2017/5/26 0026.
 * 立即执行动画
 */
let requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||((callback)=>{
    setTimeout(()=>{
        callback.call(this);
    },6000/100)
});
let transition=(callback)=>{
    setTimeout(()=>{
        requestAnimationFrame(callback);
    },0);
};

let transitionEnd=(()=>{
    let transEndEventNames = {
        WebkitTransition : 'webkitTransitionEnd',
        MozTransition    : 'transitionend',
        OTransition      : 'oTransitionEnd otransitionend',
        transition       : 'transitionend'
    };
    for(let name in transEndEventNames){
        if(typeof document.body.style[name] === "string"){
            return transEndEventNames[name];
        }
    }
})();

export {requestAnimationFrame,transition,transitionEnd};