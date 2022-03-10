const ctx4 = document.getElementById('chart4').getContext('2d');
    const myChart4 = new Chart(ctx4, {
        type: 'bar',

        data: {
            labels: ["France", "Espagne", "Suède", "Allemagne"], //nom de chaque colonne
            base: 40,
            datasets: [

            {
                label: 'Années maximum de peines de prison en circonstances "normales"',
                data: [15, 10, 6, 5],
                order: 1,
                borderColor: '#00b4d8',
                backgroundColor:'#90dbf4',
                borderWidth: 1.1,
                order: 2,

            },
            {
                label: 'Années maximum de peines de prison en circonstances "aggravantes"',
                data: [30, 30, 10, 0],
                order: 2,
                borderColor: '#4895ef',
                backgroundColor: '#a3c4f3',
                borderWidth: 1.1,
                order: 3,
            },
            {
                type : 'scatter',
                label: 'Nombre de plaintes de victimes de viol en milliers',
                data: [ 16.815, 1.387, 6.969, 8.311 ],                
                borderColor: '#AA7FFF',
                backgroundColor: '#E6D9FF',
                borderWidth: 1.1,
                order: 1,
                radius: 8,
                hoverRadius : 12,
                hoverradiusColor: '#D3F5F5',
            },
            ]},

        options: {
                indexAxis: 'y', 
                scales : {
                    x: {
                        suggestedMax: 35,
                    }
                }
        },

    });
  
