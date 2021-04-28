var timeDisplayEl = $("#currentDay");

function displayDay() {
  $("#currentDay").text(moment().format("dddd, MMMM Do"));
}
setInterval(displayDay, 1000);

var currentHour = moment().format("H");

var hourObject = {
  hourDisplayed: [9, 10, 11, 12, 1, 2, 3, 4, 5],
  hourChecked: [9, 10, 11, 12, 13, 14, 15, 16, 17],
};

for(var i = 0; hourObject.hourChecked[i]; i++){

if (hourObject.hourChecked[i] < currentHour) {
  // create column holding hour
  //create row with ability to type text in
  //create save column
  console.log("this hour has passed");
}

if (hourObject.hourChecked[i] === currentHour) {
  // create column holding hour
  //create row with ability to type text in
  //create save column
  console.log("it's " + currentHour + " right now");
}

if (hourObject.hourChecked[i] > currentHour) {
  // create column holding hour
  //create row with ability to type text in
  //create save column
  console.log("this hour has not come yet");
}
}

console.log(currentHour);

console.log(i);
