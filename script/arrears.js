/**
 * Created by Administrator on 2015/3/30.
 */
(function(){
    var hospitalized={
        init:function(){
            hospitalized.initGrid();
        },
        initGrid:function(){
            $('#listDataPersona43').datagrid({
                title:'欠费管理',
                iconCls:'icon-edit',//图标
                width:"100%",
                height: 'auto',
                nowrap: false,
                striped: true,
                border: true,
                collapsible:false,//是否可折叠的
                fit: false,//自动大小
                url:'../../api/arrears.json',
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
                    { field:'year',align:'center',title:"老人编号"},
                    { field:'productId',align:'center', title:"老人姓名"},
                    { field:'productName',align:'center',title:"身份证号"},
                    { field:'phone',align:'center',title:"欠费月费"},
                    { field:'address',align:'center',title:"欠费月数"},
                    { field:'phone',align:'center',title:"住院时间"},
                    { field:'original',align:'center',title:"联系方式"},
                    { field:'date2',align:'center',title:"护理级别"},
                ]],
                toolbar:"#listDataPersonalToo43"
            });
            //设置分页控件
            var p = $('#listDataPersona43').datagrid('getPager');
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
        hospitalized.init();
    });

})(jQuery);
/**
 * Created by Administrator on 2015/4/5.
 */
