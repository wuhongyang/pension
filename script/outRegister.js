/**
 * Created by Administrator on 2015/3/30.
 */
(function(){
    var out={
        init:function(){
            out.initGrid();
        },
        initGrid:function(){
            $('#listDataPersonal9').datagrid({
                title:'外出登记',
                iconCls:'icon-edit',//图标
                width:"100%",
                height: 'auto',
                nowrap: false,
                striped: true,
                border: true,
                collapsible:false,//是否可折叠的
                fit: false,//自动大小
                url:'../../api/outRegister.json',
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
                    { field:"a1",align:'center',title:"编号"},
                    { field:'year',align:'center',title:"姓名"},
                    { field:'productId',align:'center', title:"身份证"},
                    { field:'a4',align:'center',title:"住院类别"},
                    { field:'a5',align:'center',title:"状态"}
                ]],
                toolbar:"#listDataPersonalTool9"
            });
            //设置分页控件
            var p = $('#listDataPersonal9').datagrid('getPager');
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
