// All of the animals are having a feast! Each animal is bringing one dish.
// There is just one rule: the dish must start and end with the same letters as the animal's name.
// For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters.
// beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string.
// They will not contain numerals.

function feast(beast, dish) {
  // Use a ternary operator to select and place the first and last letters of the string into a new string.
  const beastFL = `${beast[0]}${beast[beast.length - 1]}`;
  const dishFL = `${dish[0]}${dish[dish.length - 1]}`;
  // Check to see if beastFL and dishFL are the same, if they are return true else return false.
  return beastFL === dishFL ? true : false;
}

console.log(feast("great blue heron", "garlic naan"), true);
console.log(feast("chickadee", "chocolate cake"), true);
console.log(feast("brown bear", "bear claw"), false);
