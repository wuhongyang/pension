/**
 * Created by Administrator on 2015/3/30.
 */
(function(){
    var bed={
        init:function(){
            bed.initGrid();
        },
        initGrid:function(){
            $('#listDataPersonal2').datagrid({
                title:'人事列表',
                iconCls:'icon-edit',//图标
                width:"100%",
                height: 'auto',
                nowrap: false,
                striped: true,
                border: true,
                collapsible:false,//是否可折叠的
                fit: false,//自动大小
                url:'../../api/bed.json',
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
                    { field:'year',align:'center',title:"资产名称"},
                    { field:'productId',align:'center', title:"增加数量"},
                    { field:'productName',align:'center',title:"规格"},
                    { field:'phone',align:'center',title:"助记码"},
                    { field:'address',align:'center',title:"设备品牌"},
                    { field:'phone',align:'center',title:"助记码"},
                    { field:'original',align:'center',title:"原值"},
                    { field:'manufacturers',align:'center',title:"生产厂商"},
                    { field:'date1',align:'center',title:"生产日期"},
                    { field:'date2',align:'center',title:"启用日起"},
                    { field:'type',align:'center',title:"保修方式"},
                    { field:'date3',align:'center',title:"保修到期"}
                ]],
                toolbar:"#listDataPersonalTool2"
            });
            //设置分页控件
            var p = $('#listDataPersonal2').datagrid('getPager');
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
        bed.init();
    });

})(jQuery);
/**
 * Created by Administrator on 2015/4/5.
 */
