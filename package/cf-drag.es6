/**
 * Created by yanxlg on 2017/5/27 0027.
 * drag 拖动
 */

let DRAG_DEFAULT={
    container: 'body',
    move: true
};
let idIncrementer=0;
class Drag{
    constructor(element,options){
        this.options={
            container:options.container||DRAG_DEFAULT.container,
            move:options.move||DRAG_DEFAULT.move,
        };
        this.id=idIncrementer++;
        this.$=$(element);
        this.init();
    }
    init(){
        let that           = this,
            $root          = that.$,
            BEFORE         = 'before',
            DRAG           = 'drag',
            FINISH         = 'finish',
            eventSuffix    = '.'+ that.id,
            mouseDownEvent = 'mousedown' + eventSuffix,
            mouseUpEvent   = 'mouseup' + eventSuffix,
            mouseMoveEvent = 'mousemove' + eventSuffix,
            setting        = that.options,
            selector       = setting.selector,
            handle         = setting.handle,
            $ele           = $root,
            startPos,
            cPos,
            startOffset,
            mousePos,
            moved;

        let mouseMove =(event)=>{
            let mX      = event.pageX,
                mY      = event.pageY;
            moved   = true;
            let dragPos = {
                left: mX - startOffset.x,
                top: mY - startOffset.y,
                position:"absolute",
                "margin-top":0
            };
            $ele.removeClass('drag-ready').addClass('dragging');
            if(setting.move) {
                $ele.css(dragPos);
            }
            setting[DRAG] && setting[DRAG]({
                event: event,
                element: $ele,
                startOffset: startOffset,
                pos: dragPos,
                offset: {
                    x: mX - startPos.x,
                    y: mY - startPos.y
                },
                smallOffset: {
                    x: mX - mousePos.x,
                    y: mY - mousePos.y
                }
            });
            mousePos.x = mX;
            mousePos.y = mY;
            if(setting.stopPropagation) {
                event.stopPropagation();
            }
        };

        let mouseUp =(event)=>{
            $(document).off(eventSuffix);
            if(!moved) {
                $ele.removeClass('drag-ready');
                return;
            }
            let endPos = {
                left: event.pageX - startOffset.x,
                top: event.pageY - startOffset.y
            };
            $ele.removeClass('drag-ready dragging');
            if(setting.move) {
                $ele.css(endPos);
            }
            setting[FINISH] && setting[FINISH]({
                event: event,
                element: $ele,
                startOffset: startOffset,
                pos: endPos,
                offset: {
                    x: event.pageX - startPos.x,
                    y: event.pageY - startPos.y
                },
                smallOffset: {
                    x: event.pageX - mousePos.x,
                    y: event.pageY - mousePos.y
                }
            });
            event.preventDefault();
            if(setting.stopPropagation) {
                event.stopPropagation();
            }
        };

        let mouseDown =(event)=>{
            let $mouseDownEle = $(this);
            if(selector) {
                $ele = handle ? $mouseDownEle.closest(selector) : $mouseDownEle;
            }
            if(setting[BEFORE]) {
                let isSure = setting[BEFORE]({
                    event: event,
                    element: $ele
                });
                if(isSure === false) return;
            }

            let $container = $(setting.container),
                pos        = $ele.offset();
            cPos       = $container.offset();
            startPos   = {
                x: event.pageX,
                y: event.pageY
            };
            startOffset = {
                x: event.pageX - pos.left + cPos.left,
                y: event.pageY - pos.top + cPos.top
            };
            mousePos    = $.extend({}, startPos);
            moved       = false;

            $ele.addClass('drag-ready');
            event.preventDefault();

            if(setting.stopPropagation) {
                event.stopPropagation();
            }

            $(document).on(mouseMoveEvent, mouseMove).on(mouseUpEvent, mouseUp);
        };

        if(handle) {
            $root.on(mouseDownEvent, handle, mouseDown);
        } else if(selector) {
            $root.on(mouseDownEvent, selector, mouseDown);
        } else {
            $root.on(mouseDownEvent, mouseDown);
        }
    }
    destroy() {
        let eventSuffix = '.'+ this.id;
        this.$.off(eventSuffix);
        $(document).off(eventSuffix);
    };
}


export default Drag;