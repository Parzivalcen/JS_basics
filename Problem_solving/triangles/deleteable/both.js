// make a middle triangle with the things learned from the both the other problems and UDERSTAND IT
// 1 - ONE
// Build a program that prints a half a TRIANGLE made of #'s
  //  DECONSTRUCT
// What is the first thing we Need to print the Triangle?
  // To print a line of Hashes, we need an array and do a for loop at least five time.
  // print a line of HASHES. // DONE //
// ////////////////////////////////////////////////////////////////////////////////////////////////// //
  // What is the second closest thing to a half a triangle? A Square.
  // print a Square, this can be done, by adding another for loop inside our previous one, and adding a "\n" to the array at the end of the loops // DONE //
// /////////////////////////////////////////////////////////////////////////////////////////////// //
// find a way to reduce the triangles. See which row is added first 
  // We need to add FIVE #'s to the array  in the first loop, then FOUR in the second loop, Then THREE in third loop, untill we reach ONE # added.
    //Make a descending number sequence, our conditional "i<=5" adds five #'s each time, we need to reduce that by oner for every main loop.  
      // subtract 6 from row, so it reduces the number of loops by 1 each main loop. 
let arr = [];
for(row = 1; row<=5; row++){
  // console.log(`this is loop NUMBER ${row}`)
  for(i = 1; i<=6 - row; i++){
    arr.push('#');
    // console.log(`Looping ${arr.join('')}`)
    
  }
  arr.push('\n')
}
console.log(arr.join(''));

// 2 - USE THE ABOVE SOLUTION TO MAKE A FULL TRIANGLE 
// We have the main thing to make a full triangle, which is a Half a Triangle
// we need a expresion that goes until it reacheas half of the main loop, and then goes down
  // we can substract half the value of the main loop by row, we get a result of half negative and half positive values
  // Covert these values to positive
  // we need to count the number of empty spaces, no the number of HASHES. 

let arr1 = [];
for(row = 1; row<=7; row++){
  // console.log(`this is loop NUMBER ${row}`)
  for(i = 1; i<=row - 8; i++){
    arr1.push('#');
    // console.log(`Looping ${arr.join('')}`)
    
  }
  arr1.push('\n')
}
console.log(arr1.join(''));







 n001 = [];
 for(i = 1; i<=7; i++){
    n = Math.abs(4 - i);
    n001.push(n,'\n');
    console.log(`Looping ${n001.join('')}`)
    
  }
  n001.push('\n')
console.log(arr.join(''));

//  for(i = 1; i<=2; i++){
//     n001.push('#');
//     console.log(`Looping ${n001.join('')}`)
    
//   }
//     n001.push('\n')

