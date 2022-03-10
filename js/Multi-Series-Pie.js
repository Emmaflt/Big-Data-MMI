const ctxPie = document.getElementById('chartPie').getContext('2d');
    const chartPie = new Chart(ctxPie, {
        type: 'pie',
        data: {
            labels: [['Overall Yay', 'Overall Nay', 'Group A Yay', 'Group A Nay', 'Group B Yay', 'Group B Nay', 'Group C Yay', 'Group C Nay']], //nom de chaque colonne
            datasets: [        
            {
                label: "Mineur",
                fillColor: "blue",
                data: [21, 79],
                backgroundColor: ['#AAA', '#777'],

            },
            {
                label: "Majeur",
                fillColor: "red",
                data: [20, 80],
                backgroundColor:['hsl(100, 100%, 60%)', 'hsl(100, 100%, 35%)']

            },
            {
                label: "Ensemble",
                fillColor: "green",
                data: [33, 67],
                backgroundColor: ['hsl(0, 100%, 60%)', 'hsl(0, 100%, 35%)'],
            },
            {
                label: "Ensemble",
                fillColor: "green",
                data: [10, 90],
                backgroundColor: ['hsl(180, 100%, 60%)', 'hsl(180, 100%, 35%)'],
            },

            ]},
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });