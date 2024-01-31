var dateDiffInDays = function (date1, date2) {
  //   write your code here
  // Convert input dates to milliseconds since the UTC epoch
  const utcDate1 = Date.UTC(...date1.split('-'));
  const utcDate2 = Date.UTC(...date2.split('-'));

  // Calculate the difference in milliseconds between the two dates
  const timeDifference = utcDate2 - utcDate1;

  // Convert the difference to days by dividing by the number of milliseconds in a day
  const daysDifference = timeDifference / (1000 * 60 * 60 * 24);

  // Return the difference in days
  return Math.floor(daysDifference);
	
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
