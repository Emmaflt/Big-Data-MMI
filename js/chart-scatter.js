const ctx5 = document.getElementById('chart5').getContext('2d');
    const myChart5 = new Chart(ctx5, {
        type: 'line',
        data: {
            //labels: [['Nombre de violences subies'], ['Réside en zone', 'urbaine sensible'], ['Ne réside en zone', 'urbaine sensible'], "Commune rurale", ['Agglomération de', '100 000 habitants à', "2 000 000 000 habitants"], "Agglomération de Paris"], //nom de chaque colonne
            datasets: [{
                    label: 'Agriculteurs',
                    data:
                    [//{x: 0, y: 77.3}, 
                    {x: 1, y: 11.2},
                    {x: 2, y: 4.7},
                    {x: 3, y: 6.8}],
                    backgroundColor:'rgba(255, 99, 132, 0.5)',
                    borderColor:'rgba(255, 99, 132, 0.5)'
                    
                },
                {
                    label: 'Cadre',
                    data:
                    [//{x: 0, y: 72.5}, 
                    {x: 1.2, y: 12.2},
                    {x: 2, y: 7.0},
                    {x: 3, y: 7.2}],
                    backgroundColor: 'rgba(255, 206, 86, 1)',
                    borderColor: 'rgba(255, 206, 86, 1)'
                },
                {
                    label: 'Artisans',
                    data:
                    [//{x: 0, y: 71.7}, 
                    {x: 1.3, y: 12.2},
                    {x: 2, y: 4.7},
                    {x: 3, y: 6.8}],
                    backgroundColor:'#67d14d',
                    borderColor:'#67d14d'
                },
                {
                    label: 'Intermédiaires',
                    data:
                    [//{x: 0, y: 73.4}, 
                    {x: 1, y: 12.2},
                    {x: 2, y: 4.7},
                    {x: 3, y: 6.8}],
                    backgroundColor:'#317224',
                    borderColor:'#317224'

                },
                {
                    label: 'Employés',
                    data:
                    [//{x: 0, y: 71.7}, 
                    {x: 1, y: 12.2},
                    {x: 2, y: 4.7},
                    {x: 3, y: 6.8}],
                    backgroundColor:'#a9cdd6',
                    borderColor:'#a9cdd6'
                },
                {
                    label: 'Ouvriers',
                    data:
                    [//{x: 0, y: 71.7}, 
                    {x: 1, y: 13.0},
                    {x: 2, y: 7.0},
                    {x: 3, y: 8.3}],
                    backgroundColor:'#4d8bd1',
                    borderColor:'#4d8bd1'
                },
                {
                    label: 'Sans-emploi',
                    data:
                    [//{x: 0, y: 71.7}, 
                    {x: 1, y: 12.2},
                    {x: 2, y: 4.7},
                    {x: 3, y: 6.8}],
                    backgroundColor:'#b811af',
                    borderColor: '#b811af'
                },
                {
                    label: 'NR/NSP',
                    data:
                    [//{x: 0, y: 71.7}, 
                    {x: 1, y: 12.2},
                    {x: 2, y: 4.7},
                    {x: 3, y: 6.8}],
                    backgroundColor:'#ad521c',
                    borderColor:'#ad521c'
                }],
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