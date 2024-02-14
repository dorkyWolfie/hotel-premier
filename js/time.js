// function for time desktop
function updateTime() {
    var timeInTimeZone = moment().tz("Europe/Skopje").format('hh:mm A');

    document.getElementById("realTime").innerHTML = timeInTimeZone;
}

// function for time mobile
function updateTime2() {
    var timeInTimeZone2 = moment().tz("Europe/Skopje").format('hh:mm A');

    document.getElementById("realTime2").innerHTML = timeInTimeZone2;
}

setInterval(updateTime, 1000);
setInterval(updateTime2, 1000);

updateTime();
updateTime2();