(function ($) {
    $(function () {
        // Any of the following formats may be used
        if ($("#surveiWisnus").length) {
            var graphGradient = document.getElementById("surveiWisnus").getContext('2d');
            var graphGradient2 = document.getElementById("surveiWisnus").getContext('2d');
            var saleGradientBg = graphGradient.createLinearGradient(5, 0, 5, 100);
            saleGradientBg.addColorStop(0, 'rgba(26, 115, 232, 0.18)');
            saleGradientBg.addColorStop(1, 'rgba(26, 115, 232, 0.02)');
            // var saleGradientBg2 = '#1F3B03';
            // var saleGradientBg = graphGradient.createLinearGradient(5, 0, 5, 100);
            // saleGradientBg.addColorStop(0, 'rgba(26, 115, 232, 0.18)');
            // saleGradientBg.addColorStop(1, 'rgba(26, 115, 232, 0.02)');
            var saleGradientBg2 = graphGradient2.createLinearGradient(100, 0, 50, 150);
            saleGradientBg2.addColorStop(0, 'rgba(0, 208, 255, 0.19)');
            saleGradientBg2.addColorStop(1, 'rgba(0, 208, 255, 0.03)');
            var surveiWisnusData = {
                labels: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"],
                datasets: [{
                    label: '2020',
                    data: [57345615, 52019499, 42460578, 23897105, 25547222, 34224111, 44005325, 48374243, 42407466, 46979081, 47981218, 59329929],
                    backgroundColor: saleGradientBg,
                    borderColor: [
                        '#F9A38A',
                    ],
                    borderWidth: 1.5,
                    fill: 3, // 3: no fill
                    pointBorderWidth: 1,
                    pointRadius: 3,
                    pointHoverRadius: 3,
                    pointBackgroundColor: '#F9A38A',
                    pointBorderColor: ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff'],
                }, {
                    label: '2021',
                    data: [45554772, 45396070, 48808832, 46803737, 53772233, 49405403, 34572439, 40358586, 51330541, 62821537, 60989058, 63206792],
                    backgroundColor: saleGradientBg2,
                    borderColor: [
                        '#52CDFF',
                    ],
                    borderWidth: 1.5,
                    fill: 3, // 3: no fill
                    pointBorderWidth: 1,
                    pointRadius: 3,
                    pointHoverRadius: 3,
                    pointBackgroundColor: '#52CDFF',
                    pointBorderColor: ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff'],
                }]
            };

            var surveiWisnusOptions = {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        gridLines: {
                            display: true,
                            drawBorder: false,
                            color: "#F0F0F0",
                            zeroLineColor: '#F0F0F0',
                        },
                        ticks: {
                            beginAtZero: true,
                            // maxTicksLimit: 6,
                            // autoSkip: true,
                            fontSize: 10,
                            // min: 0,
                            // max: 65000000,
                            color: "#6B778C"
                        }
                    }],
                    xAxes: [{
                        gridLines: {
                            display: false,
                            drawBorder: false,
                        },
                        ticks: {
                            beginAtZero: false,
                            maxTicksLimit: 12,
                            autoSkip: true,
                            fontSize: 10,
                            color: "#6B778C"
                        }
                    }],
                },
                legend: {
                    position: 'bottom',
                },
                // legend: true,
                // legendCallback: function (chart) {
                //     var text = [];
                //     text.push('<div class="chartjs-legend"><ul>');
                //     for (var i = 0; i < chart.data.datasets.length; i++) {
                //         console.log(chart.data.datasets[i]); // see what's inside the obj.
                //         text.push('<li>');
                //         text.push('<span style="background-color:' + chart.data.datasets[i].borderColor + '">' + '</span>');
                //         text.push(chart.data.datasets[i].label);
                //         text.push('</li>');
                //     }
                //     text.push('</ul></div>');
                //     return text.join("");
                // },

                elements: {
                    line: {
                        tension: 0,
                    }
                },
                // tooltips: {
                //     backgroundColor: 'rgba(31, 59, 179, 1)',
                // }
            }
            var surveiWisnus = new Chart(graphGradient, {
                type: 'line',
                data: surveiWisnusData,
                options: surveiWisnusOptions
            });
            // document.getElementById('survei-wisnus-legend').innerHTML = surveiWisnus.generateLegend();
            // surveiWisnus.canvas.width = 300; 
            // surveiWisnus.canvas.height = 100;
        }

        if ($("#statistikWisman").length) {
      var statistikWismanChart = document.getElementById("statistikWisman").getContext('2d');
      var statistikWismanData = {
          labels: ["2017","2018", "2019", "2020", "2021"],
          datasets: [{
              label: 'Kedatangan Wisatawan Mancanegara',
              data: [14039799, 15810305, 16106954, 4052923, 1557530],
              backgroundColor: "#52CDFF",
              borderColor: [
                  '#52CDFF',
              ],
              borderWidth: 1.5,
              fill: 3, // 3: no fill
              
          }]
      };
  
      var statistikWismanOptions = {
        responsive: true,
        maintainAspectRatio: false,
          scales: {
                    yAxes: [{
                        gridLines: {
                            display: true,
                            drawBorder: false,
                            color: "#F0F0F0",
                            zeroLineColor: '#F0F0F0',
                        },
                        ticks: {
                            beginAtZero: false,
                            maxTicksLimit: 6,
                            autoSkip: true,
                            fontSize: 10,
                            color: "#6B778C"
                        }
                    }],
                    xAxes: [{
                        gridLines: {
                            display: false,
                            drawBorder: false,
                        },
                        ticks: {
                            beginAtZero: false,
                            maxTicksLimit: 12,
                            autoSkip: true,
                            fontSize: 10,
                            color: "#6B778C"
                        }
                    }],
                },
          legend:false,
          
          elements: {
              line: {
                  tension: 0,
              }
          },
        //   tooltips: {
        //       backgroundColor: 'rgba(31, 59, 179, 1)',
        //   }
      }
      var statistikWisman = new Chart(statistikWismanChart, {
          type: 'line',
          data: statistikWismanData,
          options: statistikWismanOptions
      });
    //   document.getElementById('statistik-wisman-legend').innerHTML = marketingOverview.generateLegend();
    }

        


    });
})(jQuery);