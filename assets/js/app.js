var app = angular.module("hangoutApp", [])

app.directive("countdown", function($timeout) {
    return {
        restrict: "E",
        template: '<div ng-init="updateTimeSpan()"></div>',
        link: function(scope, element) {
            updateTimeSpan = function() {
                var d = new Date();
                var t = new Date();
                var ms;
                var s, m, h;


                d.setDate(d.getDate() + 6)
                d.setHours(16);
                d.setMinutes(0);
                d.setSeconds(0);
                // get the difference between right now and next monday
                ms = d - t;
                // get the days between now and then
                d = parseInt(ms / (1000 * 60 * 60 * 24));
                ms -= (d * 1000 * 60 * 60 * 24);
                // get hours
                h = parseInt(ms / (1000 * 60 * 60));
                ms -= (h * 1000 * 60 * 60);
                // get minutes
                m = parseInt(ms / (1000 * 60));
                ms -= (m * 1000 * 60);
                // get seconds
                s = parseInt(ms / 1000);
                element.html('<h2>' + d + ' days, ' + h + ' hours, ' + m + ' minutes, and ' + s + ' seconds.</h2>');
                setTimeout('updateTimeSpan()', 300);

            }
            updateTimeSpan()
            console.log("Hey")
        }
    }
})

function countdownCtrl() {
    function updateTimeSpan() {
        var theSpan = document.getElementById('timeLeft');
        var d = new Date();
        var t = new Date();
        var ms;
        var s, m, h;

        // if it's after 5pm, set today to tomorrow
        if (d.getHours() > 16){ d.setDate(d.getDate() + 1); }
        // get the next monday
        while (d.getDay() != 1){ d.setDate(d.getDate() + 1); }
        // set the time
        d.setHours(23);
        d.setMinutes(18);
        d.setSeconds(0);
        // get the difference between right now and next monday
        ms = d - t;
        // get the days between now and then
        d = parseInt(ms / (1000 * 60 * 60 * 24));
        ms -= (d * 1000 * 60 * 60 * 24);
        // get hours
        h = parseInt(ms / (1000 * 60 * 60));
        ms -= (h * 1000 * 60 * 60);
        // get minutes
        m = parseInt(ms / (1000 * 60));
        ms -= (m * 1000 * 60);
        // get seconds
        s = parseInt(ms / 1000);
        theSpan.innerHTML = d + ' days, ' + h + ' hours, ' + m + ' minutes, and ' + s + ' seconds.';
        setTimeout('updateTimeSpan()', 100);
    }

    onload = updateTimeSpan();
}