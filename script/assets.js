/**
 * Created by Administrator on 2015/3/30.
 */
(function(){
    var assets={
        init:function(){
            assets.initGrid();
        },
        initGrid:function(){
            $('#listDataPersonal1').datagrid({
                title:'楼栋管理',
                iconCls:'icon-edit',//图标
                width:"100%",
                height: 'auto',
                nowrap: false,
                striped: true,
                border: true,
                collapsible:false,//是否可折叠的
                fit: false,//自动大小
                url:'../../api/assets.json',
                //sortName: 'code',
                //sortOrder: 'desc',
                remoteSort:false,
                idField:'fldId',
                singleSelect:false,//是否单选
                pagination:true,//分页控件
                rownumbers:true,//行号
                frozenColumns:[[
                    {field:'ck',checkbox:true}
                ]],
                columns: [[
                    { field:'year',align:'center',title:"楼栋编号"},
                    { field:'productId',align:'center', title:"楼栋名称"},
                    { field:'productName',align:'center',title:"楼层数量"},
                    { field:'phone',align:'center',title:"每层房间数"}
                ]],
                toolbar:"#listDataPersonalTool1"
            });
            //设置分页控件
            var p = $('#listDataPersonal1').datagrid('getPager');
            $(p).pagination({
                pageSize: 10,//每页显示的记录条数，默认为10
                pageList: [5,10,15],//可以设置每页记录条数的列表
                beforePageText: '第',//页数文本框前显示的汉字
                afterPageText: '页    共 {pages} 页',
                displayMsg: '当前显示 {from} - {to} 条记录   共 {total} 条记录'
                /*onBeforeRefresh:function(){
                 $(this).pagination('loading');
                 alert('before refresh');
                 $(this).pagination('loaded');
                 }*/
            });
        },
        addEvent:function(){

        }
    }
    $(document).ready(function(){
        assets.init();
    });

})(jQuery);
/**
 * Created by Administrator on 2015/4/5.
 */
