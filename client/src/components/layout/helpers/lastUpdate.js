function lastUpdate(timestamp) {
  // Timestamp format - 2/2/2021 00:44:58

  var dayMonth = timestamp.split("/");
  var day = parseInt(dayMonth[0]);

  var timeSplit = timestamp.split(":");

  var hour = timeSplit[0].split(" ")[1];
  var minutes = timeSplit[1];

  var month = "";

  switch (parseInt(dayMonth[1])) {
    case 1:
      month = "Jan";
      break;
    case 2:
      month = "Feb";
      break;
    case 3:
      month = "Mar";
      break;
    case 4:
      month = "Apr";
      break;
    case 5:
      month = "May";
      break;
    case 6:
      month = "Jun";
      break;
    case 7:
      month = "Jul";
      break;
    case 8:
      month = "Aug";
      break;
    case 9:
      month = "Sep";
      break;
    case 10:
      month = "Oct";
      break;
    case 11:
      month = "Nov";
      break;
    case 12:
      month = "Dec";
      break;
    default:
      break;
  }

  var amPm = "";

  if (hour > 12) {
    hour = hour - 12;
    amPm = "PM";
  } else if (hour < 12 && hour !== "00") {
    amPm = "AM";
  } else if (hour === "00") {
    hour = 12;
    amPm = "AM";
  } else if (hour === "12") {
    amPm = "PM";
  }

  var formattedTime =
    "on " + month + ", " + day + " at " + hour + ":" + minutes + " " + amPm;

  return formattedTime;
}

export default lastUpdate;
