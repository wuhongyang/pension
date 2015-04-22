/**
 * Created by Administrator on 2015/3/30.
 */
(function(){
    var personal={
        init:function(){
            personal.initGrid();
        },
        initGrid:function(){
            $('#listDataPersonal').datagrid({
                title:'人事列表',
                iconCls:'icon-edit',//图标
                width:"100%",
                height: 'auto',
                nowrap: false,
                striped: true,
                border: true,
                collapsible:false,//是否可折叠的
                fit: false,//自动大小
                url:'../../api/personnel.json',
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
                    { field:'year',align:'center',title:"姓名"},
                    { field:'productId',align:'center', title:"身份证"},
                    { field:'productName',align:'center',title:"出生年月日"},
                    { field:'phone',align:'center',title:"联系方式"},
                    { field:'address',align:'center',title:"家庭住址"}
                ]],
                toolbar:"#listDataPersonalTool"
            });
            //设置分页控件
            var p = $('#listDataPersonal').datagrid('getPager');
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
        personal.init();
    });

})(jQuery);
