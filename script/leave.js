/**
 * Created by Administrator on 2015/3/30.
 */
(function(){
    var out={
        init:function(){
            out.initGrid();
        },
        initGrid:function(){
            $('#listDataPersonal23').datagrid({
                title:'出院管理',
                iconCls:'icon-edit',//图标
                width:"100%",
                height: 'auto',
                nowrap: false,
                striped: true,
                border: true,
                collapsible:false,//是否可折叠的
                fit: false,//自动大小
                url:'../../api/leave.json',
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
                    { field:'productId',align:'center', title:"生日"},
                    { field:'productName',align:'center',title:"手机"},
                    { field:'phone',align:'center',title:"身份证号"},
                    { field:"a1",align:'center',title:"入住时间"},
                    { field:'a2',align:'center',title:"出院办理人"},
                    { field:'a3',align:'center',title:"出院时间"},
                    { field:'a4',align:'center',title:"联系人信息"},
                    { field:'a5',align:'center',title:"联系人电话"}
                ]],
                toolbar:"#listDataPersonalTool23"
            });
            //设置分页控件
            var p = $('#listDataPersonal23').datagrid('getPager');
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
        out.init();
    });

})(jQuery);
