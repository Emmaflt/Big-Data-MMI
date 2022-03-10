const ctx2 = document.getElementById('chart2').getContext('2d');
    const myChart2 = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: [['Taux de réponse pénale', 'des auteurs poursuivables'], 'Mesure alternative réussie', 'Composition pénale réussie', ["Poursuite devant un", "tribunal ou un juge d'instruction"]], //nom de chaque colonne
            datasets: [        
            {
                label: "Mineur",
                data: dataMineur,
                backgroundColor: 'rgba(255, 206, 86, 1)',

            },
            {
                label: "Majeur",
                data: dataMajeur,
                backgroundColor: 'rgba(54, 162, 235, 0.2)'
            },
            {
                label: "Ensemble",
                data: dataEnsemble,
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