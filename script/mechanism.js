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
            $('#listData').datagrid({
                title:'机构列表',
                iconCls:'icon-edit',//图标
                width:"100%",
                height: 'auto',
                nowrap: false,
                striped: true,
                border: true,
                collapsible:false,//是否可折叠的
                fit: false,//自动大小
                url:'../../api/mechanism.json',
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
                    { field:'year',align:'center',title:"年度"},
                    { field:'productId',align:'center', title:"机构编号"},
                    { field:'productName',align:'center',title:"机构名称"},
                    { field:'phone',align:'center',title:"机构电话"},
                    { field:'address',align:'center',title:"机构地址"},
                    { field:'zipCode',align:'center',title:"邮编"},
                    { field:'range',align:'center',title:"服务范围"},
                    { field:'bed',align:'center',title:"设置床位(张)"},
                    { field:'commit',align:'center',title:"是否提交"}
                ]],/*
                frozenColumns:[[
                    {field:'ck',checkbox:true}
                ]],*/
                onLoadSuccess:function(){
                },
               /* data:[{
                    "year":"2007-10-05",
                    "productId":"ZJ-B1002C",
                    "productName":"滨江如家",
                    "phone":"0571-4888-5566",
                    "address":"滨江区江南大道588号",
                    "zipCode":"155003",
                    "range":"70岁以上老人",
                    "bed":"500",
                    "commit":"是"
                }]*/

                toolbar:"#myTool"
            });
            //设置分页控件
            var p = $('#listData').datagrid('getPager');
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
