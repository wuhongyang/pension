/**
 * Created by Administrator on 2015/3/30.
 */
(function(){
    var mechanism={
        init:function(){
            mechanism.initGrid();
        },
        initGrid:function(){
            $('#listData1fd').datagrid({
                title:'检查单设置',
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
                    { field:'year',align:'center',title:"检查项目编号"},
                    { field:'productId',align:'center', title:"检查单位名称"},
                    { field:'productName',align:'center',title:"检查单描述"},
                    { field:'phone',align:'center',title:"检查频率"},
                    { field:'address',align:'center',title:"检查频次"},
                    { field:'zipCode',align:'center',title:"使用角色"},
                    { field:'range',align:'center',title:"创建时间"}
                ]],/*
                frozenColumns:[[
                    {field:'ck',checkbox:true}
                ]],*/
                onLoadSuccess:function(){
                },
                data:[{
                    "year":"2L-ASD",
                    "productId":"民政局",
                    "productName":"硬件设施是否到位",
                    "phone":"3次",
                    "address":"年",
                    "zipCode":"政府机关",
                    "range":"2015-02-12"
                }],

                toolbar:"#myTool1fd"
            });
            //设置分页控件
            var p = $('#listData1fd').datagrid('getPager');
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
