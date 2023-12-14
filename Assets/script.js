// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// Displays current date in the header of the page
var today = dayjs();
$("#currentDay").text(today.format("dddd, MMMM D, YYYY"));


// TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  $("#9").children("button").on("click", function() {
    localStorage.setItem("event9am", $("#9").children("textarea").val())
  });

  $("#10").children("button").on("click", function() {
    localStorage.setItem("event10am", $("#10").children("textarea").val())
  });

  $("#11").children("button").on("click", function() {
    localStorage.setItem("event11am", $("#11").children("textarea").val())
  });

  $("#12").children("button").on("click", function() {
    localStorage.setItem("event12pm", $("#12").children("textarea").val())
  });

  $("#13").children("button").on("click", function() {
    localStorage.setItem("event1pm", $("#13").children("textarea").val())
  });
  
  $("#14").children("button").on("click", function() {
    localStorage.setItem("event2pm", $("#14").children("textarea").val())
  });

  $("#15").children("button").on("click", function() {
    localStorage.setItem("event3pm", $("#15").children("textarea").val())
  });

  $("#16").children("button").on("click", function() {
    localStorage.setItem("event4pm", $("#16").children("textarea").val())
  });

  $("#17").children("button").on("click", function() {
    localStorage.setItem("event5pm", $("#17").children("textarea").val())
  });
  
  $(function () {
  //   TODO: Add code to get any user input that was saved in localStorage and set
  //   the values of the corresponding textarea elements. HINT: How can the id
  //   attribute of each time-block be used to do this?
    $("#9").children("textarea").val(localStorage.getItem("event9am"));
    $("#10").children("textarea").val(localStorage.getItem("event10am"));
    $("#11").children("textarea").val(localStorage.getItem("event11am"));
    $("#12").children("textarea").val(localStorage.getItem("event12pm"));
    $("#13").children("textarea").val(localStorage.getItem("event1pm"));
    $("#14").children("textarea").val(localStorage.getItem("event2pm"));
    $("#15").children("textarea").val(localStorage.getItem("event3pm"));
    $("#16").children("textarea").val(localStorage.getItem("event4pm"));
    $("#17").children("textarea").val(localStorage.getItem("event5pm"));
    });


// Gets the current hour in 24-hour time
var currentHour = dayjs().hour();
console.log("current hour:", currentHour);

// Apply past, present, or future class to each time block by comparing id to the current hour
$(function () {
  var myArray = $(".time-block");
  console.log("# of working hours:", myArray.length);

  myArray.each(function () {
    var timeBlockCompare = $(this).attr("id");
    console.log("list of working hours:", timeBlockCompare);

    for (i = 0; i < myArray.length; i++)
      if (currentHour == timeBlockCompare) {
        $(this).addClass("present");

      } else if (currentHour > timeBlockCompare) {
        $(this).addClass("past");

      } else if (currentHour < timeBlockCompare) {
        $(this).addClass("future");
      }
  });
});



