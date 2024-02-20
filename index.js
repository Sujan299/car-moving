
const redLight = document.querySelector('.redLight');
const greenLight = document.querySelector('.greenLight');
const car = document.querySelector('.car');
setInterval(addClass, 6000);

function addClass() {
    redLight.classList.toggle('offLight');
    greenLight.classList.toggle('offLight');

    if (!redLight.classList.contains('offLight')) {
        car.classList.remove('move-right');
        car.classList.add('stop-here'); 
    } else if (!greenLight.classList.contains('offLight')) {
        car.classList.remove('stop-here'); 
        car.classList.add('move-right'); 
    }
}
