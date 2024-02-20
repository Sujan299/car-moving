
const redLight = document.querySelector('.redLight');
const greenLight = document.querySelector('.greenLight');
const car = document.querySelector('.car');
setInterval(addClass, 6000);

function addClass() {
    redLight.classList.toggle('offLight');
    greenLight.classList.toggle('offLight');

    if (!redLight.classList.contains('offLight')) {
        // Red light is on; stop the car
        car.classList.remove('move-right'); // Ensure car is not moving
        car.classList.add('stop-here'); // Explicitly stop the car
    } else if (!greenLight.classList.contains('offLight')) {
        // Green light is on; move the car
        car.classList.remove('stop-here'); // Ensure car is not stopped
        car.classList.add('move-right'); // Move the car
    }
}
