/**
 * Created by Administrator on 2015/3/30.
 */
(function(){
    var mechanism={
        init:function(){
            mechanism.initGrid();
        },
        initGrid:function(){
            $('#myTool12dQ').datagrid({
                title:'健康登记',
                iconCls:'icon-edit',//图标
                width:"100%",
                height: 'auto',
                nowrap: false,
                striped: true,
                border: true,
                collapsible:false,//是否可折叠的
                fit: false,//自动大小
                //url:'../../api/healthRegister.json',
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
                    { field:'year',align:'center',title:"老人姓名"},
                    { field:'productId',align:'center', title:"脉率"},
                    { field:'productName',align:'center',title:"测量类型"},
                    { field:'phone',align:'center',title:"收缩压"},
                    { field:'address',align:'center',title:"舒张压"},
                    { field:'zipCode',align:'center',title:"测量时间"},
                    { field:'range',align:'center',title:"登记时间"},
                    { field:'bed',align:'center',title:"登记人"},
                    { field:'commit',align:'center',title:"数据来源"},
                    { field:'register',align:'center',title:"备注"}
                ]],/*
                frozenColumns:[[
                    {field:'ck',checkbox:true}
                ]],*/
                onLoadSuccess:function(){
                },
               data:[{
                    "year":"王淑芬",
                    "productId":"60",
                    "productName":"正规",
                    "phone":"120",
                    "address":"120",
                    "zipCode":"2011-10-10",
                    "range":"2011-10-10",
                    "bed":"李丽",
                    "commit":"正常"
                }],

                toolbar:"#myTool12d"
            });
            //设置分页控件
            var p = $('#myTool12dQ').datagrid('getPager');
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
