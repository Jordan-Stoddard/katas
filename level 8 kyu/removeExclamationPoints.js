// Remove n exclamation marks in the sentence from left to right. n is positive integer.

// Examples
// remove("Hi!",1) === "Hi"
// remove("Hi!",100) === "Hi"
// remove("Hi!!!",1) === "Hi!!"
// remove("Hi!!!",100) === "Hi"
// remove("!Hi",1) === "Hi"
// remove("!Hi!",1) === "Hi!"
// remove("!Hi!",100) === "Hi"
// remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"

function remove(string, number) {
  // A place to store the number of times we're going to remove an !
  let timesWeRemove = number;

  // A Place to store our new string.
  let newString = "";

  // Iterate over string, and every time we find an ! and the number of !'s we're going to remove isn't 0, remove an !
  for (let i = 0; i < string.length; i++) {
    currentLetter = string[i];
    if (currentLetter !== "!") {
      newString += currentLetter;
    } else if (currentLetter === "!" && timesWeRemove !== 0) {
      timesWeRemove--;
    } else if (
      currentLetter === "!" ||
      (currentLetter !== "!" && timesWeRemove === 0)
    ) {
      newString += currentLetter;
    }
  }

  // Return string

  return newString;
}

// console.log(remove("Hi!", 1), "Hi");
// console.log(remove("Hi!", 100), "Hi");
console.log(remove("Hi!!!", 1), "Hi!!");
// console.log(remove("Hi!!!", 100), "Hi");
// console.log(remove("!Hi", 1), "Hi");
// console.log(remove("!Hi!", 1), "Hi!");
// console.log(remove("!Hi!", 100), "Hi");
// console.log(remove("!!!Hi !!hi!!! !hi", 1), "!!Hi !!hi!!! !hi");
// console.log(remove("!!!Hi !!hi!!! !hi", 3), "Hi !!hi!!! !hi");
// console.log(remove("!!!Hi !!hi!!! !hi", 5), "Hi hi!!! !hi");
// console.log(remove("!!!Hi !!hi!!! !hi", 100), "Hi hi hi");
