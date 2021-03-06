/**
 * Created by yanxianliang on 2017/6/11.
 * 数据列表控件
 * Web端使用表格显示  移动端列表显示，列表不会显示全部字段 仅显示3或4个字段，其余字段隐藏 显示规则  过滤字段
 * data-row 控制行
 * data-index 控制列
 * flex 表示固定的列
 * 表头固定，内容高度自己控制
 * 总会有自适应宽度的列  当存在fix时，fix区域就是自适应列，否则
 * titles:[{title:"",width:100,fixed:false,bindData:""}]  宽度默认值为100   如果没有fixed区域,进度条宽度需要保留  bindData:绑定的字段名
 * actions 列表操作项
 */
import dataGridTemp from './datagrid.art';
import dataRowsTemp from './rows.art';
import ListAction from '../../grid-actions/grid-actions.es6';
class DataGrid{
    constructor(container,titles,height){//通过titles来构造表格
        titles.forEach(function (title,i) {
            titles[i].width=title.width||100;
        });
        this.titles=titles;
        this.container=container;
        if(height){
            this.height=height+"px";
        }else{
            this.height="auto";
        }
        this.create();
        return this;
    }
    create(){
        let gridRender=$(dataGridTemp({
            titles:this.titles,
            height:this.height
        }));
        if(this.gridRender){
            this.gridRender.replaceWith(gridRender);
        }else{
            this.container.append(gridRender);
        }
        this.gridRender=gridRender;
        this.scrollSync();
        this.initActions();
        return this;
    }
    update(data){
        let rows=dataRowsTemp({
            titles:this.titles,
            data:data
        });
        this.gridRender.find(".data-row-group").html(rows);
        return this;
    }
    append(data){
        let rows=dataRowsTemp({
            titles:this.titles,
            data:data
        });
        this.gridRender.find(".data-row-group").append(rows);
        return this;
    }
    scrollSync(){
        let header=this.gridRender.find(".grid-header");
        let content=this.gridRender.find(".grid-data");
        content.on("scroll",function () {
            header[0].scrollLeft=content[0].scrollLeft;
        })
    }
    initActions(){
        this.listActions=new ListAction(this.gridRender);
    }
}
export default DataGrid;