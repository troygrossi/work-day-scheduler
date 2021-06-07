var date = moment().format("MMMM Do YYYY");
var time = moment().format("h:mm:ss a");
console.log(date);
console.log(time);

var getDate = function () {
  $("#date").text(date);
  $("#time").text(time);
};

var timeStatus = function () {};

$(".check-box").click(function () {
  var index = $(this).attr("data-progress-index");
  console.log($("[data-progress-index='" + index + "']"));
  if (!$(this)[0].innerText) {
    $(this)[0].innerText = "In Progress";
    $(this)[0].style.background = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--color-yellow");
  } else if ($(this)[0].innerText === "In Progress") {
    $(this)[0].innerText = "Complete";
    $(this)[0].style.background = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--color-green");
    console.log($("[data-progress-index='" + index + "']"));
    console.log($(this)[0].backgroundColor);
  } else if ($(this)[0].innerText === "Complete") {
    $(this)[0].innerText = "";
    $(this)[0].style.background = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--color-blank");
  } else {
    $(this)[0].innerText = "In Progress";
    $(this)[0].style.background = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--color-yellow");
  }
  console.log($(this)[0].backgroundColor);
});

getDate();
var count = 0;
timeStatus();
$("[data-index]").each(function () {
  count++;
  console.log($(this).attr("data-index"));
});

// checkTime();
