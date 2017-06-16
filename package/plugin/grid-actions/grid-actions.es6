/**
 * Created by yanxlg on 2017/6/16 0016.
 * 列表操作项
 */
class ListActions{
    constructor(grid){
        this.grid=grid;
        let _this=this;
        _this.update();
        $(window).on("resize",function () {
            _this.update();
        })
    }
    bindWithGrid(){
        let grid=this.grid;
        //绑定到grid中
        grid.on("mouseover",".data-row",function () {
            //获取grid的宽度
            let areWidth=grid.width()+grid.find(".grid-data")[0].scrollLeft;
            let action=$(this).find(".grid-actions");
            let actionWidth=action.outerWidth();
            action.css({
                left:areWidth+"px"
            });
            action.removeClass("hide").addClass("show").css({
                marginLeft:-actionWidth+"px"
            });
        });
        grid.on("mouseout",".data-row",function () {
            let action=$(this).find(".grid-actions");
            action.removeClass("show").addClass("hide").css({
                marginLeft:"0px"
            });
        });
        return this;
    }
    bindWithMobild(){
        let grid=this.grid;
        let startPoint,movePoint;
        grid.on("touchstart",".data-row",function (e) {
            let touch=e.targetTouches[0];
            startPoint=movePoint={
                x:touch.screenX,
                y:touch.screenY,
            };
            if(!$(this).hasClass("touchEl")){
                grid.find(".touchEl").removeClass("touchEl").attr("data-delX",0).css({
                    marginLeft:"0px"
                }).find(".grid-actions").css({
                    marginLeft:"0px"
                });
                $(this).find(".grid-actions").css({
                    marginLeft:"0px"
                });
                $(this).addClass("touchEl").attr("data-delX",0);
            }else{
                $(this).addClass("touchEl");
            }
        });
        grid.on("touchmove",".data-row",function (e) {
            if(!startPoint) return;
            let touch=e.targetTouches[0];
            let action=$(this).find(".grid-actions"),actWidth=parseInt(action.outerWidth());
            if($(this).hasClass("touchEl")){
                let mPoint={
                    x:touch.screenX,
                    y:touch.screenY
                };
                let curr=parseInt($(this).attr("data-delX"))||0;
                let delX=mPoint.x-movePoint.x+curr;
                delX=Math.max(-actWidth,delX);
                delX=Math.min(delX,0);
                $(this).attr("data-delX",delX);
                movePoint=mPoint;
                action.css({
                    marginLeft:delX+"px"
                });
                $(this).css({
                    marginLeft:delX+"px"
                })
            }else{
            }
        });
        grid.on("touchend touchcancel",".data-row",function (e) {
            startPoint=null;
            let action=$(this).find(".grid-actions"),actWidth=parseInt(action.outerWidth());
            let curr=parseInt($(this).attr("data-delX"))||0;
            if(Math.abs(curr)<actWidth/2){
                action.css({
                    marginLeft:"0px"
                });
                $(this).css({
                    marginLeft:"0px"
                })
            }else{
                action.css({
                    marginLeft:-actWidth+"px"
                });
                $(this).css({
                    marginLeft:-actWidth+"px"
                })
            }
        })
    }
    update(){
        let width=document.body.offsetWidth;
        if(parseInt(width)<1000){
            //移动端
            this.grid.off("mouseover");
            this.grid.off("mouseout");
            this.bindWithMobild();
        }else{
            //web端
            this.grid.off("touchstart");
            this.grid.off("touchmove");
            this.grid.off("touchend");
            this.grid.off("touchcancel");
            this.bindWithGrid();
        }
    }
}
export default ListActions;