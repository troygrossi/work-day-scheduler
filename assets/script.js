var date = moment().format("MMMM Do YYYY");
var time = moment().format("h:mm:ss a");
console.log(date);
console.log(time);

var getDate = function () {
  $("#date").text(date);
  $("#time").text(time);
};

var timeStatus = function () {};

//Changes progress box on click; chnages color and text value
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

var saveLocalData = function () {
  localStorage.clear;
  var index = 1;
  $("[data-hour-index]").each(function () {
    localStorage.setItem("hour" + index, $(this).val());
    index++;
  });
  index = 1;
  $("[data-minute-index]").each(function () {
    localStorage.setItem("minute" + index, $(this).val());
    index++;
  });
  index = 1;
  $("[data-am-pm-index]").each(function () {
    localStorage.setItem("am-pm" + index, $(this).val());
    index++;
  });
  index = 1;
  $("[data-text-index]").each(function () {
    localStorage.setItem("text" + index, $(this).val());
    index++;
  });
  index = 1;
  $("[data-progress-index]").each(function () {
    localStorage.setItem("progress" + index, $(this).text());
    index++;
  });
};
var getLocalData = function () {
  console.log("get data");
  var index = 1;
  $("[data-hour-index]").each(function () {
    $(this).val(localStorage.getItem("hour" + index));
    console.log($(this).val());
    index++;
  });
  index = 1;
  $("[data-minute-index]").each(function () {
    $(this).val(localStorage.getItem("minute" + index));
    index++;
  });
  index = 1;
  $("[data-am-pm-index]").each(function () {
    $(this).val(localStorage.getItem("am-pm" + index));
    index++;
  });
  index = 1;
  $("[data-text-index]").each(function () {
    $(this).val(localStorage.getItem("text" + index));
    console.dir($(this));
    index++;
  });
  index = 1;
  $("[data-progress-index]").each(function () {
    $(this).text(localStorage.getItem("progress" + index));
    index++;
  });
};
getLocalData();
$(window).click(function () {
  console.log("click");
  saveLocalData();
});

getDate();
var count = 0;
timeStatus();
// $("[data-index]").each(function () {
//   count++;
//   console.log($(this).attr("data-index"));
// });
// checkTime();
