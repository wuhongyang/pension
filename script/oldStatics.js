/**
 * Created by Administrator on 2015/3/30.
 */
(function(){
    var oldStatics={
        init:function(){
            oldStatics.initGrid();
        },
        initGrid:function(){
            $('#pie').highcharts({
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false
                },
                title: {
                    text: '全院老人入住情况统计'
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
                        ['五保',   45.0],
                        ['社会代养',       26.8],
                        {
                            name: '子女托养',
                            y: 12.8,
                            sliced: true,
                            selected: true
                        },
                        ['三无',    8.5],
                        ['其他',   10]
                    ]
                }]
            });
        },
        addEvent:function(){

        }
    }
    $(document).ready(function(){
        oldStatics.init();
    });

})(jQuery);
