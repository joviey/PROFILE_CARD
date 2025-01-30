const element = document.querySelector('[data-testid="currentTimeUTC"]');
let newDate = new Date()
let currentTime = {
    hours: newDate.getUTCHours(),
    minutes: newDate.getUTCMinutes(),
    seconds: newDate.getUTCSeconds()
}
const actualTime = `${currentTime.hours}:${String(currentTime.minutes).padStart(2, '0')}:${String(currentTime.seconds).padStart(2, '0')}`;
element.textContent = actualTime;