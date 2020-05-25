// Returns the name of the month based on the number passed as a param
// Being used in the testing related cards as well
const getMonth = (month) => {
  const months = {
    "01": "Jan",
    "02": "Feb",
    "03": "Mar",
    "04": "Apr",
    "05": "May",
    "06": "Jun",
    "07": "Jul",
    "08": "Aug",
    "09": "Sep",
    "10": "Oct",
    "11": "Nov",
    "12": "Dec",
  };

  var monthStr = months[month];
  return monthStr;
};

export default getMonth;
