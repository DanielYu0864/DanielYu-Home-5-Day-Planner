$(document).ready(function(){// tells engine to load html and css first.
    // array for #hours and hours
    var arrayHoursId = ["#hour6", "#hour7", "#hour8", "#hour9", "#hour10", "#hour11", "#hour12", "#hour13", "#hour14", "#hour15", "#hour16", "#hour17", "#hour18", "#hour19", "#hour20"]
    var NotHashHours = [];
    // var
    var getItemTime;
    // display the date and time by [Moment.js]
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm a'));

    // event listener to clear all the plan
    $(".clean").on("click", function() {
        $(this).val(localStorage.clear(getItemTime));
        $(this).val(window.location.reload());
    })

    // sbmit function for save value to localStorage
    $(".saveBtn").on("click", function() {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, text);
    });


    // founction for remove hash tag

    function removedHashTag() {
        for (i = 0; i <= arrayHoursId.length - 1; i++) {
            NotHashHours[i] = arrayHoursId[i].split("#").pop();
        }
    }
    removedHashTag();
    // function for looping $().val(localStorage.getItem());
    function loopForTime() {
        for (i = 1; i < 15; i++) {
            var hourDescribe = arrayHoursId[i];
            var description = " .description";
            getItemTime = NotHashHours[i];
            $(hourDescribe + description).val(localStorage.getItem(getItemTime));
        }
        // output like this
        console.log($("#hour6 .description").val(localStorage.getItem("hour6")));
    }
    loopForTime();

    // function to tracking hours and change the colors
    function trackHours() {
        //current number of hours by [Moment.js]
        var currentTime = moment().hour();

        $(".time-block").each(function() {
            // turn #hours to mumber
            var allHours = parseInt($(this).attr("id").split("hour")[1]);
            // console.log(currentTime, allHours);

            if (allHours < currentTime) {
                $(this).addClass("past");
                $(this).removeClass("present");
                $(this).removeClass("future");
            } else if (allHours === currentTime) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })

    }
    trackHours();
})