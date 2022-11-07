$(function() {
  /* ChartJS
   * -------
   * Data and config for chartjs
   */
  'use strict';

  var jpData = {
    labels: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"],
    datasets: [{
      label: '2020',
      data: [57345615, 52019499, 42460578, 23897105, 25547222, 34224111, 44005325, 48374243, 42407466, 46979081, 47981218, 59329929],
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
      data: [45554772, 45396070, 48808832, 46803737, 53772233, 49405403, 34572439, 40358586, 51330541, 62821537, 60989058, 63206792],
      backgroundColor: "#fff",
      borderColor: '#52CDFF',
      borderWidth: 1.5,
      fill: false, // 3: no fill
      pointBorderWidth: 1,
      pointRadius: 3,
      pointHoverRadius: 3,
      pointBackgroundColor: '#52CDFF',
      pointBorderColor: '#fff',
    }]
  };

  var jpOptions = {
    // responsive: false,
                // maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        gridLines: {
                            display: true,
                            drawBorder: false,
                        },
                        ticks: {
                            beginAtZero: true,
                            maxTicksLimit: 6,
                            autoSkip: true,
                            fontSize: 10,
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

  var paData = {
    labels: ["Jawa Timur", "Jawa Tengah", "Jawa Barat", "DKI Jakarta", "Banten", "DI Yogyakarta", "Sumatera Utara", "Sumatera Selatan", "Bali", "Lampung", "Provinsi Lain"],
    datasets: [{
      label: '2020',
      data: [126.68, 118.9, 90.82, 44.35, 30.45, 22.47, 13.44, 8.85, 7.87, 7.87, 52.87],
      backgroundColor: "#F9A38A",
      borderColor: '#F9A38A',
      borderWidth: 1.5,
      fill: true,
    }, {
      label: '2021',
      data: [155.11, 133.34, 96.14, 51.02, 38.05, 24.16, 16.4, 9.86, 8.93, 8.66, 61.35],
      backgroundColor: "#52CDFF",
      borderColor: '#52CDFF',
      borderWidth: 1.5,
      fill: true, // 3: no fill
    }]
  };
  var paOptions = {
    responsive:true,
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

  var ptData = {
    labels: ["Jawa Timur", "Jawa Tengah", "Jawa Barat", "Banten", "DKI Jakarta",  "DI Yogyakarta", "Sumatera Utara", "Sumatera Selatan", "Bali", "Sumatera Barat", "Provinsi Lain"],
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
    responsive:true,
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

  var rpData = {
    labels: ["Akomodasi", ["Makanan","/ Minuman"], "Tranportasi", "Cinderamata", "Lainnya"],
    datasets: [{
      label: '2020',
      data: [303.98, 260.07, 278.82, 108.17, 599.77],
      backgroundColor: "#F9A38A",
      borderColor: '#F9A38A',
      borderWidth: 1.5,
      fill: true, // 3: no fill
    }, {
      label: '2021',
      data: [580.66, 407.61, 429.06, 129.52, 853.77],
      backgroundColor: "#52CDFF",
      borderColor: '#52CDFF',
      borderWidth: 1.5,
      fill: true, // 3: no fill
    }]
  };
  var rpOptions = {
    responsive:true,
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
      data: paData,
      options: paOptions
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
      data: rpData,
      options: rpOptions
    });
  }

  if ($("#lineChart").length) {
    var lineChartCanvas = $("#lineChart").get(0).getContext("2d");
    var lineChart = new Chart(lineChartCanvas, {
      type: 'line',
      data: jpData,
      options: jpOptions
    });
  }

  
});