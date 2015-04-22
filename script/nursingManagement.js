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
            $('#listData1bb').datagrid({
                title:'缴费信息',
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
                    { field:'year',align:'center',title:"护工姓名"},
                    { field:'productId',align:'center', title:"家庭住址"},
                    { field:'productName',align:'center',title:"联系方式"},
                    { field:'phone',align:'center',title:"身份证号"},
                    { field:'address',align:'center',title:"联系人电话"},
                    { field:'zipCode',align:'center',title:"是否制卡"},
                    { field:'range',align:'center',title:"职务"}
                ]],/*
                frozenColumns:[[
                    {field:'ck',checkbox:true}
                ]],*/
                onLoadSuccess:function(){
                },
                data:[{
                    "year":"王丽丽",
                    "productId":"杭州是滨江区如家春园一栋2单元3楼",
                    "productName":"0571-4888-5566",
                    "phone":"220801187609040287",
                    "address":"18767362865",
                    "zipCode":"是",
                    "range":"护工主管"
                }],

                toolbar:"#myTool1bb"
            });
            //设置分页控件
            var p = $('#listData1bb').datagrid('getPager');
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
