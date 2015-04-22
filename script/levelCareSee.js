/**
 * Created by Administrator on 2015/3/30.
 */
(function(){
    var mechanism={
        toolbar:'<div>'+
                'Date From: <input class="easyui-datebox" style="width:80px">'+
                'To: <input class="easyui-datebox" style="width:80px">'+
                'Language:'+
                '<input class="easyui-combobox" style="width:100px"'+
                'url="data/combobox_data.json"'+
                'valueField="id" textField="text">'+
                '<a href="#" class="easyui-linkbutton" iconCls="icon-search">Search</a>'+
                '</div>',
        init:function(){
            mechanism.initGrid();
        },
        initGrid:function(){
            $('#listData1xx').datagrid({
                title:'护理查看',
                iconCls:'icon-edit',//图标
                width:"100%",
                height: 'auto',
                nowrap: false,
                striped: true,
                border: true,
                collapsible:false,//是否可折叠的
                fit: false,//自动大小
                //url:'../../api/pay.json',
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
                    { field:'year',align:'center',title:"编号"},
                    { field:'productId',align:'center', title:"级别"},
                    { field:'productName',align:'center',title:"级别代码"},
                    { field:'phone',align:'center',title:"级别说明"},
                    { field:'address',align:'center',title:"总费用"},
                    { field:'zipCode',align:'center',title:"项目总数"}
                ]],/*
                frozenColumns:[[
                    {field:'ck',checkbox:true}
                ]],*/
                onLoadSuccess:function(){
                },
                data:[{
                    "year":"B1002C",
                    "productId":"A",
                    "productName":"A1",
                    "phone":"全职",
                    "address":"300/天",
                    "zipCode":"15"
                }],


                toolbar:"#myToolxx"
            });
            //设置分页控件
            var p = $('#listData1xx').datagrid('getPager');
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
        mechanism.init();
    });

})(jQuery);
