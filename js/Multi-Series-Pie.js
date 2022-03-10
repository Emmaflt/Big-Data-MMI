const ctxPie = document.getElementById('chartPie').getContext('2d');
    const chartPie = new Chart(ctxPie, {
        type: 'pie',
        data: {
            labels: ['épouses', 'autres', 'concubines', 'physique', 'autres', 'psychologique', 'séparation', 'autres', 'dispute', '109 femmes décédés en 2016' ], //nom de chaque colonne
            datasets: [        
            {
                // 3 couronne
                data: [50, 17, 33],
                backgroundColor: ['#FFC85C','#FF6666','#E22929']
            },
            {
                // 2 couronne
                data: [63, 22 , 15],
                backgroundColor:['#9FE8AA', '#F4FF76', '#EAEE20']
            },
            {
                // 1 couronne
                data: [47, 38, 15],
                backgroundColor: ['#7FE0FF', '#4E95FF','#7EB1FF'],
            },
            {
                //centre
                data: [100],
                backgroundColor: ['#B64CDC'],
            },

            ]},
        options: {
            responsive: true,
    plugins: {
      legend: {
        labels: {
          generateLabels: function(chart) {
            // Get the default label list
            const original = Chart.overrides.pie.plugins.legend.labels.generateLabels;
            const labelsOriginal = original.call(this, chart);

            // Build an array of colors used in the datasets of the chart
            let datasetColors = chart.data.datasets.map(function(e) {
              return e.backgroundColor;
            });
            datasetColors = datasetColors.flat();

            // Modify the color and hide state of each label
            labelsOriginal.forEach(label => {
              // There are twice as many labels as there are datasets. This converts the label index into the corresponding dataset index
              label.datasetIndex = (label.index - label.index % 3) / 3;

              // The hidden state must match the dataset's hidden state
              label.hidden = !chart.isDatasetVisible(label.datasetIndex);

              // Change the color to match the dataset
              label.fillStyle = datasetColors[label.index];
            });

            return labelsOriginal;
          }
        },
        onClick: function(mouseEvent, legendItem, legend) {
          // toggle the visibility of the dataset from what it currently is
          legend.chart.getDatasetMeta(
            legendItem.datasetIndex
          ).hidden = legend.chart.isDatasetVisible(legendItem.datasetIndex);
          legend.chart.update();
        }
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const labelIndex = (context.datasetIndex * 3) + context.dataIndex;
            return context.chart.data.labels[labelIndex] + ': ' + context.formattedValue;
          }
        }
      }
    }    
        }
    });