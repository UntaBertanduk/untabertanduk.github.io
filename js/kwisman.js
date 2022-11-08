$(function () {
  /* ChartJS
   * -------
   * Data and config for chartjs
   */
  'use strict';


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
});