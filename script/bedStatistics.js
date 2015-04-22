/**
 * Created by Administrator on 2015/3/30.
 */
(function(){
    var bedStatics={
        init:function(){
            bedStatics.initGrid();
        },
        initGrid:function(){
            $('#pieL').highcharts({
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false
                },
                title: {
                    text: '养老院床位使用情况统计'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: false
                        },
                        showInLegend: true
                    }
                },
                series: [{
                    type: 'pie',
                    name: '占比',
                    data: [
                        ['空闲床位',   45.0],
                        ['使用床位',   26.8],
                        ['未投入',   10]
                        /*{
                            name: '子女托养',
                            y: 12.8,
                            sliced: true,
                            selected: true
                        },*/
                    ]
                }]
            });
        },
        addEvent:function(){

        }
    }
    $(document).ready(function(){
        bedStatics.init();
    });

})(jQuery);
