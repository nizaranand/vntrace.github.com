$(document).ready(function () {

  // Graph Data ##############################################
  var graphData = [{
      // Visits
      data: [ [6, 1300], [7, 1600], [8, 1900], [9, 2100], [10, 2500], [11, 2200], [12, 2000], [13, 1950], [14, 1900], [15, 2000] ],
      color: '#71c73e'
    }, {
      // Returning Visits
      data: [ [6, 500], [7, 600], [8, 550], [9, 600], [10, 800], [11, 900], [12, 800], [13, 850], [14, 830], [15, 1000] ],
      color: '#77b7c5',
      points: { radius: 4, fillColor: '#77b7c5' }
    }
  ];

  if ($('#line').length > 0) {
    // Lines Graph #############################################
    var plotLine = $.plot($('#line'), graphData, {
      series: {
        points: {
          show: true,
          radius: 5
        },
        lines: {
          show: true
        },
        shadowSize: 0
      },
      grid: {
        color: '#646464',
        borderColor: 'transparent',
        borderWidth: 20,
        hoverable: true
      },
      xaxis: {
        tickColor: 'transparent',
        tickDecimals: 2
      },
      yaxis: {
        tickSize: 1000
      }
    });
  }

  if ($('#bar').length > 0) {
    var plotBar = $.plot($('#bar'), graphData, {
      series: {
        bars: {
          show: true,
          barWidth: .9,
          align: 'center'
        },
        shadowSize: 0
      },
      grid: {
        color: '#646464',
        borderColor: 'transparent',
        borderWidth: 20,
        hoverable: true
      },
      xaxis: {
        tickColor: 'transparent',
        tickDecimals: 2
      },
      yaxis: {
        tickSize: 1000
      }
    });
  }

  if ($('#pie').length >0 && $('#donut').length > 0) {
    var pieData = [];
    var series = Math.floor(Math.random()*10)+1;
    for( var i = 0; i<series; i++)
    {
      pieData[i] = { label: "Series"+(i+1), data: Math.floor(Math.random()*100)+1 }
    }
    
    var plotPie = $.plot($('#pie'), pieData , {
      series: {
        pie: {
          show: true,
          combine: {
            color: '#999',
            threshold: 0.1
          }
        }
      },
     legend: {
        show: false
      }
    });

    var plotDonut = $.plot($('#donut'), pieData, {
      series: {
        pie: {
          innerRadius: 0.5,
          show: true
        }
      }, 
      grid: {
        hoverable: true
      }
    });
  }

  if (typeof plotLine != undefined && typeof plotBar != undefined) {
    var previousPoint = null;
    $('#line, #bar').bind('plothover', function (event, pos, item) {
      if (item) {
        if (previousPoint != item.dataIndex) {
          previousPoint = item.dataIndex;
          $('#tooltip').remove();
          console.log(item);
          var x = item.datapoint[0],
            y = item.datapoint[1];
            showTooltip(item.pageX, item.pageY, y + ' visitors at ' + x + '.00h');
        }
      } else {
        $('#tooltip').remove();
        previousPoint = null;
      }
    });
  }
  

  // Helper fucntion for display tooltip in flot chart
  function showTooltip(x, y, contents) {
    $('<div id="tooltip">' + contents + '</div>').css({
      top: y - 16,
      left: x + 20
    }).appendTo('body').fadeIn();
  }

});