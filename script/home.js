/**
 * Created by Administrator on 2015/3/29.
 */
(function(){
    $(document).ready(function(){
        home.init();
    });
    var home={
        tabs:{
            "mechanism":"机构信息",
            "assets":"楼栋管理",
            "personnel":"人事信息",
            "bed":"固定资产",
            "hospitalized":"入院管理",
            "oldMan":"老人信息",
            "outSearch":"外出查询",
            "pay":"缴费查询",
            "outRegistration":"外出登记",
            "leaveHospital":"出院查询",
            "arrears":"欠费查询",
            "oldStatistics":"老人情况统计",
            "bedStatistics":"床位情况统计",
            "personnelBedStatistics":"人事床位统计",
            "healthRegister":"健康登记",
            "healthStatistics":"健康统计",
            "drugDeposit":"药品缴存",
            "applicationSettings":"用药设置",
            "drugRegistration":"用药登记",
            "remainingDrugs":"剩余药品查询",
            "drugDictionary":"药品字典",
            "familyInformation":"同步家属信息",
            "familyCounseling":"家属咨询",
            "foodMaintenance":"食物维护",
            "foodManagement":"食谱管理",
            "viewRecipes":"查看食谱",
            "nursingManagement":"护工管理",
            "nursingPacket":"护工分组",
            "nurseScheduling":"护工排班",
            "nursesTurnover":"离职护工",
            "nursingWorkS":"护工工作统计",
            "nursingWorkQ":"护工工作查询",
            "nursingInspectionS":"护工巡检统计",
            "nursingInspectionQ":"护工巡检查询",
            "statisticsWork":"巡检工作统计",
            "workersCheck":"护工检查查询",
            "resultsStatistics":"检查结果统计",
            "seeWorkers":"查看护工",
            "nurseTeamStatistics":"护工小组统计",
            "checkProject":"检查项目设置",
            "checkList":"检查单设置",
            "nursingProject":"护理项目设置",
            "levelCare":"护理借别设置",
            "levelCareSee":"护理级别查看",
            "handheldDevice":"手持设备管理",
            "menManager":"人员管理",
            "assignPermissions":"权限分配",
            "departmentManagement":"部门管理",
            "changePass":"修改密码",
            "userManager":"用户管理"
        },
        init: function(){
            home.addEvent();
            home.resetCss();
        },
        addEvent:function(){
            $(".link").click(function(){
                home.newTab($(this).attr("name"));
            });
            $("#btn-cancel").click(function(){
                window.location.href="../../index.html";
            });
            $(".tabs >li").click(function(e){
                var title = $(this).text();
            });
            //class="first"
        },
        newTab:function(name){
            //personnel
            var title = home.tabs[name];
            if($("#tabs").tabs("exists",title)){
                $("#tabs").tabs("select",title);
            }else{
                $("#tabs").tabs("add",{
                    title:title,
                    href:name+"_content.html",
                    closable:true
                });
            }
        },
        resetCss:function(){
            $('#tt').tabs({tabPosition:"left"});
            $(".tabs-header-left").css({
                width:"43px",
                height:"100%"
            });
            $(".tabs-header-left ul").css({
                width:"43px",
                height:"100%"
            });
            $(".tabs-header-right").css({
                width:"43px",
                height:"100%"
            });
            $(".panel-tool").css("display","none");
            $(".accordion-header").css({
                width:"100%"
            });
            $(".accordion").css({
                border:"none"
            });
            $(".accordion div").css({
                width:"100%"
            });
            $(".accordion-body").css({
                width:"100%",
                padding:"0"
            });
            $("#manager-my").css("height","100%");
            $(".panel-body-noborder").css("width","100%");
            $('.tabs-panels-right').css({
                width:"153px",
                height:"100%",
                "border-top":"none",
                "border-right":"0.5px solid #F9E6EE",
                "border-left":"1px solid #7EACF5"
            });
       }
    }
})(jQuery);
/**
 * Created by Administrator on 2015/3/29.
 */
