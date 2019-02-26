// Simple, remove the spaces from the string, then return the resultant string.

function noSpace(string) {
  // place to store the string
  let newString = "";

  // iterate through the string, concat the currentLetter with newString if it's not a space.
  for (let i = 0; i < string.length; i++) {
    let currentLetter = string[i];
    if (currentLetter !== " ") {
      newString += currentLetter;
    }
  }

  // Return newString
  return newString;
}

console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"), "8j8mBliB8gimjB8B8jlB");
console.log(
  noSpace("8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd"),
  "88Bifk8hB8BB8BBBB888chl8BhBfd"
);
console.log(noSpace("8aaaaa dddd r     "), "8aaaaaddddr");
