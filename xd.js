// JavaScript source code

var chatBox = document.getElementsByName("message_body")[0];
var replyBut = document.getElementById("u_0_t");

var refreshPeriod = 6000;

function days_between(date1, date2) {

    // The number of milliseconds in one day
    var ONE_DAY = 1000 * 60 * 60 * 24

    // Convert both dates to milliseconds
    var date1_ms = date1.getTime()
    var date2_ms = date2.getTime()

    // Calculate the difference in milliseconds
    var difference_ms = Math.abs(date1_ms - date2_ms)

    // Convert back to days and return
    return Math.round(difference_ms/ONE_DAY)

}


var hourInt = setInterval(function () {
    //if(Date().getHours() == Date().getMinutes())
    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();
    var mounth = new Date().getMonth();
    var day = new Date().getDay();
    var year = new Date().getYear();
    if (hours == minutes) {
        chatBox.classList.remove("DOMControl_placeholder")
        if (minutes > 9)
            chatBox.value = "Mamy " + day + " dzien " + mounth + ", do konca roku zostalo " +
                days_between(new Date(year, mounth, day), new Date(year + 1, 0, 0)) + ". Jest godzina "
                + new Date().getHours() + ":" + new Date().getMinutes() + ". Ktos o tobie mysli :*";
        else
            chatBox.value = "Mamy " + day + " dzien " + mounth + ", do konca roku zostalo " +
                days_between(new Date(year, mounth, day), new Date(year + 1, 0, 0)) + ". Jest godzina "
                + new Date().getHours() + ":0" + new Date().getMinutes() + ". Ktos o tobie mysli :*";
    }
}, refreshPeriod);

var replyClicker = setInterval(function () {
    replyBut.click();
}, 1);

var stopHour = function () { clearInterval(hourInt); };
