
document.getElementById("button4").addEventListener('click', function(){ // Ajout d'un event lors du clic du btn
    var url_base64jp = document.getElementById("chart4").toDataURL("image/jpg"); // transform du graph en image
    var a = document.getElementById("download"); //Creation du <a>
    // console.log(a);
    a.href = url_base64jp; // on stock l'url base64 dans le lien
    a.download = "Image.png"; //nom du fichier qui sera dl
    a.click(); //dl du fichier auto
});

document.getElementById("button3").addEventListener('click', function(){ // Ajout d'un event lors du clic du btn
    var url_base64jp = document.getElementById("chart3").toDataURL("image/jpg"); // transform du graph en image
    var a = document.getElementById("download"); //Creation du <a>
    // console.log(a);
    a.href = url_base64jp; // on stock l'url base64 dans le lien
    a.download = "Image.png"; //nom du fichier qui sera dl
    a.click(); //dl du fichier auto
});

document.getElementById("button1").addEventListener('click', function(){ // Ajout d'un event lors du clic du btn
    var url_base64jp = document.getElementById("chartPie").toDataURL("image/jpg"); // transform du graph en image
    var a = document.getElementById("download"); //Creation du <a>
    // console.log(a);
    a.href = url_base64jp; // on stock l'url base64 dans le lien
    a.download = "Image.png"; //nom du fichier qui sera dl
    a.click(); //dl du fichier auto
});

document.getElementById("button2").addEventListener('click', function(){ // Ajout d'un event lors du clic du btn
    var url_base64jp = document.getElementById("chart2").toDataURL("image/jpg"); // transform du graph en image
    var a = document.getElementById("download"); //Creation du <a>
    // console.log(a);
    a.href = url_base64jp; // on stock l'url base64 dans le lien
    a.download = "Image.png"; //nom du fichier qui sera dl
    a.click(); //dl du fichier auto
});

document.getElementById("button5").addEventListener('click', function(){ // Ajout d'un event lors du clic du btn
    var url_base64jp = document.getElementById("chart5").toDataURL("image/jpg"); // transform du graph en image
    var a = document.getElementById("download"); //Creation du <a>
    // console.log(a);
    a.href = url_base64jp; // on stock l'url base64 dans le lien
    a.download = "Image.png"; //nom du fichier qui sera dl
    a.click(); //dl du fichier auto
});


