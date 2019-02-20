// +---------------+-------------+
// |    month      |    days     |
// +---------------+-------------+
// |1,3,5,7,8,10,12|     31      |
// +---------------+-------------+
// |4,6,9,11       |     30      |
// +---------------+-------------+
// |2              |     28      |  (Do not consider the leap year)
// +---------------+-------------+

function howManyDays(month) {
  switch (month) {
    case 2:
      return 28;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
  }
  return 31;
}

console.log(howManyDays(1), 31);
console.log(howManyDays(2), 28);
console.log(howManyDays(3), 31);
console.log(howManyDays(4), 30);
console.log(howManyDays(12), 31);
