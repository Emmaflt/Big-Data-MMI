const ctx1 = document.getElementById('chart1').getContext('2d');
    const myChart1 = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ['18-39 ans', '40-75 ans', 'Yellow', 'Green', 'Purple', 'Orange'], //nom de chaque colonne
            datasets: [{
                label: '# of Alvina', //légende
                data: [1, 1, 1, 1, 1, 3], //nombre par colonne
                backgroundColor: [ // couleur du fond de la colonne
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [ //couleur du bord de la colonne
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1 //largeur des bordures
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });   