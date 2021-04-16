let timer_countdownclock;
const button_start = document.getElementById("countdown_start");
button_start.addEventListener("click", start_countdown);
const button_stop = document.getElementById("countdown_stop");
button_stop.addEventListener("click", stop_countdown);
showTime(0, 0, 0);


function makeTimer(end) {
    let start = moment(new Date());
    let diff = end.diff(start);
    hours = moment.duration(diff).hours();
    minutes = moment.duration(diff).minutes();
    seconds = moment.duration(diff).seconds();
    showTime(hours, minutes, seconds);
    if (hours === 0 && minutes === 0 && seconds === 0) {
        clearInterval(timer_countdownclock);
        alert("time out");
    }
}

function stop_countdown(){
    clearInterval(timer_countdownclock);
    showTime(0, 0, 0);
}

function showTime(hours, minutes, seconds) {
    $("#hours").html(hours + "<span>Hours</span>");
    $("#minutes").html(minutes + "<span>Minutes</span>");
    $("#seconds").html(seconds + "<span>Seconds</span>");
}

function start_countdown() {
    clearInterval(timer_countdownclock);
    let hours = document.getElementById("hours-input").value;
    let minutes = document.getElementById("minutes-input").value;
    let seconds = parseInt(document.getElementById("seconds-input").value) + 1; //due to setinterval (1000)
    let end = moment(new Date()).add(hours, 'hours').add(minutes, 'minutes').add(seconds, 'seconds');
    timer_countdownclock = setInterval(function () {
        makeTimer(end);
    }, 1000);
}



