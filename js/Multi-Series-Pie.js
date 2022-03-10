const ctxPie = document.getElementById('chartPie').getContext('2d');
    const chartPie = new Chart(ctxPie, {
        type: 'pie',
        data: {
            labels: [], //nom de chaque colonne
            datasets: [        
            {
                // 3 couronne
                data: [50, 17, 33 ],
                backgroundColor: ['#FFC85C','#FF6666','#E22929',],
            },
            {
                // 2 couronne
                data: [63, 22 , 15],
                backgroundColor:['#9FE8AA', '#F4FF76', '#EAEE20']
            },
            {
                // 1 couronne
                data: [47, 27, 11, 15],
                backgroundColor: ['#7FE0FF', '#4E95FF','#4E95FF','#7EB1FF'],
            },
            {
                //centre
                data: [100, 0],
                backgroundColor: ['#B64CDC', '#000'],
            },

            ]},
        options: {
            responsive: true,      
        }
    });