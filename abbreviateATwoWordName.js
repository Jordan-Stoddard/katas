// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot seperating them.

// It should look like this:

// Sam Harris => S.H

// Patrick Feeney => P.F

const harris = 'Sam Harris'

function abbrevName(name){
  return name.split(' ').map(n => n.charAt(0).toUpperCase()).join('.')
}

console.log(abbrevName(harris))