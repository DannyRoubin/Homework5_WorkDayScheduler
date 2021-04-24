var timeDisplayEl = $("#currentDay");


function displayDay() {
    $("#currentDay").text(moment().format('dddd, MMMM Do'));
  }

  console.log (displayDay( $("#currentDay")));