const ctx52 = document.getElementById('chart52').getContext('2d');
const myChart52 = new Chart(ctx52, {
    type: 'radar',
    data: {
        labels: [['Volé'], ["Blessé"], ['Menacé'], ['Agressé']],
        datasets: [
            {
              label: 'Cadres',
              data: [ 17.9, 5.2, 20.2, 15.3],
              borderColor: 'rgba(255, 206, 86, 1)',
              backgroundColor:'rgba(255, 255, 255, 0)',
            },
            {
              label: 'Agriculteurs',
              data: [ 12.4, 4.5, 15.7, 12.0],
              borderColor:'rgba(255, 99, 132, 0.5)',
              backgroundColor:'rgba(255, 255, 255, 0)',
            },
            {
              label: 'Artisans',
              data: [ 17.2, 6.3, 20.7, 14.6],
              borderColor:'#67d14d',
              backgroundColor:'rgba(255, 255, 255, 0)',
            },
            {
              label: 'Intermédiaires',
              data: [ 14.7, 5.4, 20.1, 13.8],
              borderColor:'#317224',
              backgroundColor:'rgba(255, 255, 255, 0)',
            },
            {
              label: 'Employés ',
              data: [ 15.5, 6.4, 20.5, 14.5],
              borderColor:'#a9cdd6',
              backgroundColor:'rgba(255, 255, 255, 0)',
            },
            {
              label: 'Ouvriers',
              data: [ 13.2, 6.9, 18.7, 14.0],
              borderColor:'#4d8bd1',
              backgroundColor:'rgba(255, 255, 255, 0)',
            },
            {
                label: 'Sans-emploi',
                data: [ 12.8, 7.0, 19.5, 13.7],
                borderColor:'#b811af',
                backgroundColor:'rgba(255, 255, 255, 0)',
            },
            {
                label: 'NR/NSP (1)',
                data: [ 13.8, 8.1, 20.4, 15.4],
                borderColor:'#ad521c',
                backgroundColor:'rgba(255, 255, 255, 0)',
            },
          ],
    },
    options: {
        scales: {
            x: {
                type: 'linear',
                position: 'bottom'
              }
        }
    }
});