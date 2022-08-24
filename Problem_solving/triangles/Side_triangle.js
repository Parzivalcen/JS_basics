// Write a program that uses only two output statements, cout < < "#" and cout < < "\ n", to produce a pattern of hash symbols shaped like half of a perfect 5 × 5 square

//----DECONSTRUCT the problem ---------
// print a line of 5 #s
  // make a for loop that loop five times and push one # to an array everytime
// print a square of #, with a for loop inside the other one
// add line brake "\n" inside first for loop
// print a descending number sequence, by counting up
  // by creating a for loop and substrackting 6 from n, you get it.
  // implement this on the '#' triangle solution. 



let arr = [];
for(row = 1; row<=5; row++){
  for(i = 1; i<= 6-row; i++){
    arr.push('#')
  }
  arr.push('\n')
}
console.log(arr.join(''));

// descending numbers
for(row=1; row<=5; row++){
  n = 6 - row
  console.log(n);
}




// for (let row = 1; row <= 5; row++){
//   for (let i = 1; i <= 6 - row; i++){
//     console.log('#')
//   }
//   console.log('\n')
// }

// for (let row = 1; row <= 5; row++){
//   console.log(6 - row, '\n')
// }