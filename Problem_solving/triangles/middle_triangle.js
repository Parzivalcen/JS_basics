// Write a program that uses only two output statements, cout < < "#" and cout < < "\ n", to produce a pattern of hash symbols shaped like a sideways triangle:
// implement the other problem solution in this one, we already have half a triangle
  // write anotherone that is rotated
// make a for loop that loops 5 times
  // // print a line of 5 #s
  // make a for loop that loop 7 times and push one # to an array everytime
  // substract half the number of loops and convert it to absolute values
  // count the number of empty spaces, no the #'s
// add line brake "\n" inside first for loop

// print a descending number sequence, that start from half the number of loops, and when it reachs zero it goes back up, by counting up
  // by creating a for loop and substrackting half the number of loops from row, you get it.
  // implement this on the '#' triangle solution. 
arr = []
arr1 = []

for(let row = 1; row<=7;row++){
  console.log(Math.abs(4 - row))
    // console.log(arr1)
  
}



for(let row = 1; row<=7; row++){
  for(let i = 1; i<= 4 - Math.abs(4 - row); i++){
    arr.push('#')
  }
  arr.push('\n')
}
arr = arr.join('')
console.log(arr)