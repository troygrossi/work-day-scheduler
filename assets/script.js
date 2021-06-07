var date = moment().format("MMMM Do YYYY");
var time = moment().format("h:mm:ss a");
console.log(date);
console.log(time);

var getDate = function () {
  $("#date").text(date);
  $("#time").text(time);
};

var timeStatus = function () {};

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
    localStorage.setItem(
      "progress-color" + index,
      $(this).css("background-color")
    );
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
    $(this).css(
      "background-color",
      localStorage.getItem("progress-color" + index)
    );
    index++;
  });
};

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

$(".time-hour").blur(function () {
  if ($(this).val() > 12 || $(this).val() < 00 || isNaN($(this).val())) {
    alert("Please input valid hours");
    $(this).val("00");
  }
});
$(".time-minute").blur(function () {
  if ($(this).val() > 60 || $(this).val() < 00 || isNaN($(this).val())) {
    alert("Please input valid minutes");
    $(this).val("00");
  }
});

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
