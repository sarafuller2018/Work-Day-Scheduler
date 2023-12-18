// All code wrapped in jQuery

// Displays current date in header of the page
var today = dayjs();
$("#currentDay").text(today.format("dddd, MMMM D, YYYY"));

// Gets the current hour in 24-hour time
var currentHour = dayjs().hour();
console.log("current hour:", currentHour);

// Saves user input to localStorage on save-button click
$(".time-block").children("button").on("click", function () {
  var hour = $(this).parent().attr("id")
  console.log($(this));
  console.log(hour);
  localStorage.setItem(`event${hour}`, $(`#${hour}`).children("textarea").val());
});

$(function () {
  var myArray = $(".time-block");
  console.log("# of working hours:", myArray.length);

  // Retrieves input from localStorage
  myArray.each(function () {
    var timeBlockCompare = $(this).attr("id");
    console.log("list of working hours:", timeBlockCompare);
    $(`#${timeBlockCompare}`).children("textarea").val(localStorage.getItem(`event${timeBlockCompare}`));

    // Applies past, present, or future class to each time block
    if (currentHour == timeBlockCompare) {
      $(this).addClass("present");

    } else if (currentHour > timeBlockCompare) {
      $(this).addClass("past");

    } else if (currentHour < timeBlockCompare) {
      $(this).addClass("future");
    }
  });
});