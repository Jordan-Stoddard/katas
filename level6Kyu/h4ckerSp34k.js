// Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k)
// version of the string.

// replace all 'a's with 4, 'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5.
function hackerSpeak(str) {
    // Store hacker string
    let hackerString = "";
    // Iterate over str
  
    for (let i = 0; i < str.length; i++) {
      let currentLetter = str[i];
      switch (currentLetter) {
        //if it is a hacker letter then concat hacker number instead.
        case "a":
          hackerString += "4";
          break;
        case "e":
          hackerString += "3";
          break;
        case "i":
          hackerString += "1";
          break;
        case "o":
          hackerString += "0";
          break;
        case "s":
          hackerString += "5";
          break;
        // if is not a hacker letter, then concat to hacker string,
        default:
          hackerString += currentLetter;
      }
    }
    return hackerString;
  }

// Examples
console.log(hackerSpeak("javascript is cool"), "j4v45cr1pt 15 c00l");

console.log(hackerSpeak("programming is fun"), "pr0gr4mm1ng 15 fun");

console.log(hackerSpeak("become a coder"), "b3c0m3 4 c0d3r");

// Notes)
// In order to work properly, the function should
// replace all 'a's with 4, 'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5.

