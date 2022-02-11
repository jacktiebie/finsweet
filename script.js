
var btnLeft = document.getElementById('btn_left');
var btnRight = document.getElementById('btn_right');




btnLeft.addEventListener("click", leftFunction);
btnRight.addEventListener('click', rightFunction);

function leftFunction() {
var reviewTwo = document.getElementsByClassName('review-grid-item-3');
var reviewOne = document.getElementsByClassName('review-grid-item-2'); 
var displaySetting = reviewOne.style.display;

    if (displaySetting == 'block') {
        reviewOne.style.display = 'none';
        reviewTwo.style.display = 'block';
    } else {
        reviewOne.style.display = 'block';
        reviewTwo.style.display = 'none';
    }
}







