import getMonths from "../constants/getMonth";

function lastUpdate(timestamp) {
  var day = timestamp.slice(0, 2);
  var month = getMonths(timestamp.slice(3, 5));
  var hour = timestamp.slice(11, 13);
  var minutes = timestamp.slice(14, 16);

  var amPm = "";

  if (hour > 0 && hour < 12) {
    amPm = "AM";
  } else if (hour > 12) {
    hour = hour - 12;
    amPm = "PM";
  } else if (hour === 12) {
    amPm = "PM";
  } else {
    hour = 12;
    amPm = "AM";
  }

  var formattedTime =
    "on " +
    month +
    ", " +
    day +
    " at " +
    hour +
    ":" +
    minutes.substr(-2) +
    " " +
    amPm;

  return formattedTime;
}

export default lastUpdate;
