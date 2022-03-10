const ctx3 = document.getElementById('chart3').getContext('2d');
    const myChart3 = new Chart(ctx3, {
        type: 'bar',
        data: {
            labels: [['Moyenne en France', 'Métropolitaine'], ['Réside en zone', 'urbaine sensible'], ['Ne réside en zone', 'urbaine sensible'], "Commune rurale", ['Agglomération de', '100 000 habitants à', "2 000 000 000 habitants"], "Agglomération de Paris"], //nom de chaque colonne
            datasets: [        
            {
                label: "Violences physiques",
                fillColor: "blue",
                data: [4.7,7.4,4.8,3.6, 4.3, 5.0, 5.5, 6.6],
                backgroundColor: 'rgba(255, 206, 86, 1)',

            },
            {
                label: "Violences sexuelles",
                fillColor: "red",
                data: [1.3,2.1,1.4,1.1,1.0,1.6,1.9,1.5],
                backgroundColor: 'rgba(54, 162, 235, 0.2)'

            },
            {
                label: "Violences physiques et/ou sexuelles",
                fillColor: "green",
                data: [5.1, 8.6, 5.7, 4.4, 5.0, 6.1, 6.8, 7.3],
                borderColor: 'rgba(75, 192, 192, 0.2)',
                backgroundColor: 'rgba(75, 192, 192, 1)',
            }

            ]},
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });