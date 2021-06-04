var date = moment().format("MMM Do YY");
var time = moment().format("h:mm:ss a");
console.log(date);
console.log(time);

var getDate = function () {
  $("#date").text(date);
  $("#time").text(time);
};

getDate();
