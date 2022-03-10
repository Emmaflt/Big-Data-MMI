const CM = document.getElementById('ChartMaurine').getContext('2d');

  const DATA_COUNT = 7;
  const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};
  const data = {
    labels: ['18-39 ans', '40-75 ans', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [2, 2, 2, 2, 2, 3],
        backgroundColor: 'rgba(255, 199, 132, 0.2)',
      },
      {
        label: 'Dataset 2',
        data: [1, 1, 1, 1, 1, 3],
        backgroundColor: 'rgba(255, 99, 32, 0.2)',
      },
      {
        label: 'Dataset 3',
        data: [4, 4, 4, 4, 4, 3],
        backgroundColor: 'rgba(55, 99, 132, 0.2)',
      },
    ]
  };

const ChartMaurine = {
    type: 'bar',
    data: data,
    options: {
      plugins: {
        title: {
          display: true,
          text: 'Chart.js Bar Chart - Stacked'
        },
      },
      responsive: true,
      scales: {
        x: {
          stacked: true,
        },  
        y: {
          stacked: true
        }
      }
    }
};

const actions = [
    {
      name: 'Randomize',
      handler(chart) {
        chart.data.datasets.forEach(dataset => {
          dataset.data = [2, 2, 2, 2, 2, 3]
        });
        chart.update();
      }
    },
  ];