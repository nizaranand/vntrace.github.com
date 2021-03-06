$(function () {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'visited-chart',
                type: 'spline'
            },
            title: {
                text: 'Monthly Visited'
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: {
                title: {
                    text: 'Visited'
                },
                labels: {
                    formatter: function() {
                        return this.value;
                    }
                }
            },
            tooltip: {
                crosshairs: true,
                shared: true
            },
            plotOptions: {
                spline: {
                    marker: {
                        radius: 4,
                        lineColor: '#eeddc0',
                        lineWidth: 1
                    }
                }
            },
            series: [{
                name: 'Visits',
                marker: {
                    symbol: 'circle'
                },
                data: [7, 20, 10, 15, 20, 21, 25, 30, 25, 1, 100, 45],
                lineColor: '#3A87AD',
                color: '#3A87AD'
            }]
        });
    });
    
});