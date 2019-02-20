// Write a simple function that takes as a parameter a date object and returns a boolean value representing whether the date is today or not.

// Make sure that your function does not return a false positive by just checking just the day.

function isToday(date) {
    return new Date().toDateString() === date.toDateString()

}

var tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

var yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);

console.log(isToday(new Date()), true);
console.log(isToday(tomorrow), false);
console.log(isToday(yesterday), false);


// let today = new Date();
// if (date.toString() === new Date().toString()) {
//   return true;
// } else if (date === today.setDate(today.getDate())) {
//   return true
// } else {
//     return false
// }