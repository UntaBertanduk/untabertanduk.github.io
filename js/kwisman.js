$(function () {
  /* ChartJS
   * -------
   * Data and config for chartjs
   */
  'use strict';

  var data = {
    labels: ["2013", "2014", "2014", "2015", "2016", "2017"],
    datasets: [{
      label: '# of Votes',
      data: [10, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1,
      fill: false
    }]
  };

  var options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    legend: {
      display: false
    },
    elements: {
      point: {
        radius: 0
      }
    }

  };
  var doughnutPieData = {
    datasets: [{
      data: [30, 40, 30],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
      'Pink',
      'Blue',
      'Yellow',
    ]
  };
  var doughnutPieOptions = {
    responsive: true,
    animation: {
      animateScale: true,
      animateRotate: true
    }
  };
  var areaData = {
    labels: ["2013", "2014", "2015", "2016", "2017"],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1,
      fill: true, // 3: no fill
    }]
  };

  var areaOptions = {
    plugins: {
      filler: {
        propagate: true
      }
    }
  }

  var multiAreaData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
        label: 'Facebook',
        data: [8, 11, 13, 15, 12, 13, 16, 15, 13, 19, 11, 14],
        borderColor: ['rgba(255, 99, 132, 0.5)'],
        backgroundColor: ['rgba(255, 99, 132, 0.5)'],
        borderWidth: 1,
        fill: true
      },
      {
        label: 'Twitter',
        data: [7, 17, 12, 16, 14, 18, 16, 12, 15, 11, 13, 9],
        borderColor: ['rgba(54, 162, 235, 0.5)'],
        backgroundColor: ['rgba(54, 162, 235, 0.5)'],
        borderWidth: 1,
        fill: true
      },
      {
        label: 'Linkedin',
        data: [6, 14, 16, 20, 12, 18, 15, 12, 17, 19, 15, 11],
        borderColor: ['rgba(255, 206, 86, 0.5)'],
        backgroundColor: ['rgba(255, 206, 86, 0.5)'],
        borderWidth: 1,
        fill: true
      }
    ]
  };

  var multiAreaOptions = {
    plugins: {
      filler: {
        propagate: true
      }
    },
    elements: {
      point: {
        radius: 0
      }
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        }
      }],
      yAxes: [{
        gridLines: {
          display: false
        }
      }]
    }
  }

  var scatterChartData = {
    datasets: [{
        label: 'First Dataset',
        data: [{
            x: -10,
            y: 0
          },
          {
            x: 0,
            y: 3
          },
          {
            x: -25,
            y: 5
          },
          {
            x: 40,
            y: 5
          }
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)'
        ],
        borderWidth: 1
      },
      {
        label: 'Second Dataset',
        data: [{
            x: 10,
            y: 5
          },
          {
            x: 20,
            y: -30
          },
          {
            x: -25,
            y: 15
          },
          {
            x: -10,
            y: 5
          }
        ],
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1
      }
    ]
  }

  var scatterChartOptions = {
    scales: {
      xAxes: [{
        type: 'linear',
        position: 'bottom'
      }]
    }
  }


  var multiLineData = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [{
        label: 'Dataset 1',
        data: [12, 19, 3, 5, 2, 3],
        borderColor: [
          '#587ce4'
        ],
        borderWidth: 2,
        fill: false
      },
      {
        label: 'Dataset 2',
        data: [5, 23, 7, 12, 42, 23],
        borderColor: [
          '#ede190'
        ],
        borderWidth: 2,
        fill: false
      },
      {
        label: 'Dataset 3',
        data: [15, 10, 21, 32, 12, 33],
        borderColor: [
          '#f44252'
        ],
        borderWidth: 2,
        fill: false
      }
    ]
  };

  var kmData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Juni", "Juli", "Agt", "Sep", "Okt", "Nov", "Des"],
    datasets: [{
        label: '2017',
        data: [1107968, 1023388, 1059777, 1171386, 1148588, 1144001, 1370591, 1393243, 1250231, 1161565, 1062030, 1147031],
        backgroundColor: "#fff",
        borderColor: '#F1BC31',
        borderWidth: 1.5,
        fill: false,
        pointBorderWidth: 1,
        pointRadius: 3,
        pointHoverRadius: 3,
        pointBackgroundColor: '#F1BC31',
        pointBorderColor: '#fff',
      },
      {
        label: '2018',
        data: [1097839, 1197503, 1363426, 1302321, 1242705, 1322674, 1547231, 1511021, 1370943, 1291605, 1157483, 1405554],
        backgroundColor: "#fff",
        borderColor: '#E25822',
        borderWidth: 1.5,
        fill: false,
        pointBorderWidth: 1,
        pointRadius: 3,
        pointHoverRadius: 3,
        pointBackgroundColor: '#E25822',
        pointBorderColor: '#fff',
      }, {
        label: '2019',
        data: [1201735, 1243996, 1311911, 1274231, 1249536, 1434103, 1468173, 1530268, 1388719, 1346434, 1280781, 1377067],
        backgroundColor: "#fff",
        borderColor: '#58949C',
        borderWidth: 1.5,
        fill: false, // 3: no fill
        pointBorderWidth: 1,
        pointRadius: 3,
        pointHoverRadius: 3,
        pointBackgroundColor: '#58949C',
        pointBorderColor: '#fff',
      },
      {
        label: '2020',
        data: [1290411, 872765, 486155, 158066, 161842, 156561, 155742, 161549, 148984, 152293, 144476, 164079],
        backgroundColor: "#fff",
        borderColor: '#F9A38A',
        borderWidth: 1.5,
        fill: false,
        pointBorderWidth: 1,
        pointRadius: 3,
        pointHoverRadius: 3,
        pointBackgroundColor: '#F9A38A',
        pointBorderColor: '#fff',
      }, {
        label: '2021',
        data: [126515, 105788, 119979, 112756, 139433, 126844, 127249, 118533, 120100, 146137, 150577, 163619],
        backgroundColor: "#fff",
        borderColor: '#52CDFF',
        borderWidth: 1.5,
        fill: false, // 3: no fill
        pointBorderWidth: 1,
        pointRadius: 3,
        pointHoverRadius: 3,
        pointBackgroundColor: '#52CDFF',
        pointBorderColor: '#fff',
      }
    ]
  };


  var kmOptions = {
    // responsive: false,
    // maintainAspectRatio: false,
    scales: {
      yAxes: [{
        gridLines: {
          display: true,
          drawBorder: false,
          // color: "#F0F0F0",
          // zeroLineColor: '#F0F0F0',
        },
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 6,
          autoSkip: true,
          fontSize: 10,
          // color: "#6B778C"
        }
      }],
      xAxes: [{
        gridLines: {
          display: true,
          drawBorder: false,
        },
        ticks: {
          beginAtZero: false,
          maxTicksLimit: 12,
          autoSkip: true,
          fontSize: 10,
          // color: "#6B778C"
        }
      }],
    },
    legend: {
      position: 'bottom',
    },
    elements: {
      line: {
        tension: 0,
      }
    },
  };

  var kyData = {
    labels: ["2017", "2018", "2019", "2020", "2021"],
    datasets: [{
      label: 'Kedatangan Wisatawan Mancanegara',
      data: [14039799, 15810305, 16106954, 4052923, 1557530],
      backgroundColor: "#fff",
      borderColor: '#52CDFF',
      borderWidth: 1.5,
      fill: false,
      pointBorderWidth: 1,
      pointRadius: 3,
      pointHoverRadius: 3,
      pointBackgroundColor: '#52CDFF',
      pointBorderColor: '#fff',
    }]
  };
  var kyOptions = {
    // responsive: false,
    // maintainAspectRatio: false,
    scales: {
      yAxes: [{
        gridLines: {
          display: true,
          drawBorder: false,
          // color: "#F0F0F0",
          // zeroLineColor: '#F0F0F0',
        },
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 6,
          autoSkip: true,
          fontSize: 10,
          // color: "#6B778C"
        }
      }],
      xAxes: [{
        gridLines: {
          display: true,
          drawBorder: false,
        },
        ticks: {
          beginAtZero: false,
          maxTicksLimit: 12,
          autoSkip: true,
          fontSize: 10,
          // color: "#6B778C"
        }
      }],
    },
    legend: {
      display: false,
    },
    elements: {
      line: {
        tension: 0,
      }
    },
  };

  var lbData = {
    labels: ["Timor Leste","Malaysia", "Tiongkok", "Amerika Serikat", "Singapura"],
    datasets: [{
      label: 'Kunjungan',
      data: [819488, 480723, 54713, 21962, 18704],
      backgroundColor: "#F9A38A",
      borderColor: '#F9A38A',
      borderWidth: 1.5,
      fill: true,
    }]
  };

  var lbOptions = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          fontSize: 10
        }
      }]
    },
    legend: {
      display: false,
    },
    elements: {
      point: {
        radius: 0
      }
    }
  };

  var ptData = {
    labels: ["Jawa Timur", "Jawa Tengah", "Jawa Barat", "Banten", "DKI Jakarta", "DI Yogyakarta", "Sumatera Utara", "Sumatera Selatan", "Bali", "Sumatera Barat", "Provinsi Lain"],
    datasets: [{
      label: '2020',
      data: [127.10, 132.43, 89.88, 28.84, 30.91, 19.59, 14.05, 9.22, 8.82, 7.89, 55.83],
      backgroundColor: "#F9A38A",
      borderColor: '#F9A38A',
      borderWidth: 1.5,
      fill: true,
    }, {
      label: '2021',
      data: [155.49, 146.02, 95.19, 37.36, 36.73, 22.22, 17.11, 10.09, 9.72, 9.34, 63.75],
      backgroundColor: "#52CDFF",
      borderColor: '#52CDFF',
      borderWidth: 1.5,
      fill: true, // 3: no fill
    }]
  };
  var ptOptions = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          fontSize: 10
        }
      }]
    },
    legend: {
      display: true,
      position: 'right',
    },
    elements: {
      point: {
        radius: 0
      }
    }
  };

  var jkData = {
    labels: ["Perempuan", "Laki-laki"],
    datasets: [{
      label: '2020',
      data: [44.1, 55.9],
      backgroundColor: "#F9A38A",
      borderColor: '#F9A38A',
      borderWidth: 1.5,
      fill: true, // 3: no fill
    }, {
      label: '2021',
      data: [55.9, 74.67],
      backgroundColor: "#52CDFF",
      borderColor: '#52CDFF',
      borderWidth: 1.5,
      fill: true, // 3: no fill
    }]
  };
  var jkOptions = {
    responsive: true,
    scales: {
      yAxes: [{
        scaleLabel: {
        display: true,
        labelString: 'Persen'
      },
        ticks: {
          beginAtZero: true,
          fontSize: 10
        }
      }]
    },
    legend: {
      display: true,
      position: 'top',
    },
    elements: {
      point: {
        radius: 0
      }
    }
  };

  // Get context with jQuery - using jQuery's .get() method.
  if ($("#barChart").length) {
    var barChartCanvas = $("#barChart").get(0).getContext("2d");
    // This will get the first returned node in the jQuery collection.
    var barChart = new Chart(barChartCanvas, {
      type: 'horizontalBar',
      data: lbData,
      options: lbOptions
    });
  }

  if ($("#barChart2").length) {
    var barChartCanvas2 = $("#barChart2").get(0).getContext("2d");
    // This will get the first returned node in the jQuery collection.
    var barChart2 = new Chart(barChartCanvas2, {
      type: 'horizontalBar',
      data: ptData,
      options: ptOptions
    });
  }

  if ($("#barChart3").length) {
    var barChartCanvas3 = $("#barChart3").get(0).getContext("2d");
    // This will get the first returned node in the jQuery collection.
    var barChart3 = new Chart(barChartCanvas3, {
      type: 'bar',
      data: jkData,
      options: jkOptions
    });
  }

  if ($("#lineChart").length) {
    var lineChartCanvas = $("#lineChart").get(0).getContext("2d");
    var lineChart = new Chart(lineChartCanvas, {
      type: 'line',
      data: kmData,
      options: kmOptions
    });
  }

  if ($("#lineChart2").length) {
    var lineChart2Canvas = $("#lineChart2").get(0).getContext("2d");
    var lineChart2 = new Chart(lineChart2Canvas, {
      type: 'line',
      data: kyData,
      options: kyOptions
    });
  }

  if ($("#linechart-multi").length) {
    var multiLineCanvas = $("#linechart-multi").get(0).getContext("2d");
    var lineChart = new Chart(multiLineCanvas, {
      type: 'line',
      data: multiLineData,
      options: options
    });
  }

  if ($("#areachart-multi").length) {
    var multiAreaCanvas = $("#areachart-multi").get(0).getContext("2d");
    var multiAreaChart = new Chart(multiAreaCanvas, {
      type: 'line',
      data: multiAreaData,
      options: multiAreaOptions
    });
  }

  if ($("#doughnutChart").length) {
    var doughnutChartCanvas = $("#doughnutChart").get(0).getContext("2d");
    var doughnutChart = new Chart(doughnutChartCanvas, {
      type: 'doughnut',
      data: doughnutPieData,
      options: doughnutPieOptions
    });
  }

  if ($("#pieChart").length) {
    var pieChartCanvas = $("#pieChart").get(0).getContext("2d");
    var pieChart = new Chart(pieChartCanvas, {
      type: 'pie',
      data: doughnutPieData,
      options: doughnutPieOptions
    });
  }

  if ($("#areaChart").length) {
    var areaChartCanvas = $("#areaChart").get(0).getContext("2d");
    var areaChart = new Chart(areaChartCanvas, {
      type: 'line',
      data: areaData,
      options: areaOptions
    });
  }

  if ($("#scatterChart").length) {
    var scatterChartCanvas = $("#scatterChart").get(0).getContext("2d");
    var scatterChart = new Chart(scatterChartCanvas, {
      type: 'scatter',
      data: scatterChartData,
      options: scatterChartOptions
    });
  }

  if ($("#browserTrafficChart").length) {
    var doughnutChartCanvas = $("#browserTrafficChart").get(0).getContext("2d");
    var doughnutChart = new Chart(doughnutChartCanvas, {
      type: 'doughnut',
      data: browserTrafficData,
      options: doughnutPieOptions
    });
  }
});