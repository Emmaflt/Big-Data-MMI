const ctx3 = document.getElementById('chart3').getContext('2d');
    const myChart3 = new Chart(ctx3, {
        type: 'bar',
        data: {
            labels: [['Moyenne en France', 'Métropolitaine'], ['Réside en zone', 'urbaine sensible'], ['Ne réside en zone', 'urbaine sensible'], "Commune rurale", ['Agglomération de', '100 000 habitants à', "2 000 000 000 habitants"], "Agglomération de Paris"], //nom de chaque colonne
            datasets: [        
            {
                label: "Violences physiques",
                data: dataPhysique,
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor:'rgba(255, 99, 132, 0.5)',
                borderWidth: 1.1
            },
            {
                label: "Violences sexuelles",
                data: dataSex,
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderWidth: 1.1
            },
            {
                label: "Violences physiques et/ou sexuelles",
                data: dataTotal,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                borderWidth: 1.1

            }

            ]},
        options: {
            xAxisID:"%",
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });