function SwitchSlide(showSlide, hideSlide, hideButton, showButton) {
    showSlide.style.display = 'block';
    showButton.style.display = 'block';
    hideSlide.style.display = 'none';
    hideButton.style.display = 'none';

    document.getElementById(buttonID).style.display = 'none';
}