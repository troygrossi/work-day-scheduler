var yellow = getComputedStyle(document.documentElement).getPropertyValue(
  "--color-yellow"
);
var green = getComputedStyle(document.documentElement).getPropertyValue(
  "--color-green"
);
var red = getComputedStyle(document.documentElement).getPropertyValue(
  "--color-red"
);

var getDate = function () {
  var date = moment().format("MMMM Do YYYY");
  var time = moment().format("h:mm:ss a");
  $("#date").text(date);
  $("#time").text(time);
};

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
    localStorage.setItem("text-color" + index, $(this).css("background-color"));
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
  var index = 1;
  $("[data-hour-index]").each(function () {
    $(this).val(localStorage.getItem("hour" + index));
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
    $(this).css("background-color", localStorage.getItem("text-color" + index));
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

var setDefaultTimes = function () {
  var hour = 8;
  var minute = "00";
  var index = 1;

  $("[data-hour-index]").each(function () {
    $(this).val(hour);
    if (hour === 12) {
      hour = 0;
    }
    hour++;
  });
  $("[data-minute-index]").each(function () {
    $(this).val(minute);
  });
  $("[data-am-pm-index]").each(function () {
    if (index >= 5) {
      $(this).val("PM");
    } else {
      $(this).val("AM");
    }
    index++;
  });
  inputColorChange();
};

var inputColorChange = function () {
  var index = 1;
  var hour = moment().hour();
  var scheduleHour;

  $("[data-hour-index]").each(function () {
    if ($(this).val()) {
      if ($("[data-am-pm-index=" + index + "]").val() === "AM") {
        if (parseInt($(this).val()) === 12) {
          scheduleHour = parseInt($(this).val()) + 12;
        } else {
          scheduleHour = parseInt($(this).val());
        }
      } else if ($("[data-am-pm-index=" + index + "]").val() === "PM") {
        scheduleHour = parseInt($(this).val()) + 12;
        if (parseInt($(this).val()) === 12) {
          scheduleHour = parseInt($(this).val());
        }
      } else {
        scheduleHour = parseInt($(this).val() + 12);
      }
      if (scheduleHour === hour) {
        $("[data-text-index=" + index + "]").css("background-color", yellow);
      } else if (scheduleHour > hour) {
        $("[data-text-index=" + index + "]").css("background-color", green);
      } else if (scheduleHour < hour) {
        $("[data-text-index=" + index + "]").css("background-color", red);
      }
    }
    index++;
  });
};

//Changes progress box on click; chnages color and text value
$(".check-box").click(function () {
  var index = $(this).attr("data-progress-index");
  if (!$(this)[0].innerText) {
    $(this)[0].innerText = "In Progress";
    $(this)[0].style.background = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--color-orange-dark");
  } else if ($(this)[0].innerText === "In Progress") {
    $(this)[0].innerText = "Complete";
    $(this)[0].style.background = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--color-green-dark");
  } else if ($(this)[0].innerText === "Complete") {
    $(this)[0].innerText = "";
    $(this)[0].style.background = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--color-blank");
  } else {
    $(this)[0].innerText = "In Progress";
    $(this)[0].style.background = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--color-orange-dark");
  }
});

$(".time-hour").blur(function () {
  if ($(this).val() > 12 || $(this).val() < 00 || isNaN($(this).val())) {
    alert("Please input valid hours");
    $(this).val("00");
  }
  inputColorChange();
});

$(".am-pm").click(function () {
  inputColorChange();
});

$(".time-minute").click(function () {
  if ($(this).val() > 60 || $(this).val() < 00 || isNaN($(this).val())) {
    alert("Please input valid minutes");
    $(this).val("00");
  }
});

$(".button-default").click(function () {
  setDefaultTimes();
});

$(document).ready(function () {
  getDate();
  setInterval(getDate, 1000);
});
getLocalData();
$(window).click(function () {
  saveLocalData();
});
