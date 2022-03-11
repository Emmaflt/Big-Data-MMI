function SwitchSlide(showSlide, hideSlide, hideButton, showButton) {
    showSlide.style.display = 'block';
    showButton.style.display = 'block';
    hideSlide.style.display = 'none';
    hideButton.style.display = 'none';

    document.getElementById(buttonID).style.display = 'none';
}

function ShowSlide(showSlide, hideSlide) {
    for (let i = 0; i <hideSlide.length; i++) {
        hideSlide[i].style.display = 'none';
    }
    showSlide.style.display = 'block';
}

setTimeout(function() {
    document.getElementById('alvinaChart2').style.display = 'none';
    console.log("coucou je disparait")
}, 1000)