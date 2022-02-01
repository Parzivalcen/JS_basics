// Write a program that uses only two output statements, cout < < "#" and cout < < "\ n", to produce a pattern of hash symbols shaped like a sideways triangle:
// implement the other problem solution in this one, we already have half a triangle
  // write anotherone that is rotated
arr = []
arr1 = []

for(let row = 1; row<=5;row++){
  for (let i = 6; i<=1; i--){
    arr1.push('#');
    // console.log(arr1)
  }
  arr1.push('\n');
}
arr1 = arr1.join('');
console.log(arr1)


for(let row = 1; row<=5; row++){
  for(let i = 1; i<= 6 - row; i++){
    arr.push('#')
  }
  arr.push('\n')
}
arr = arr.join('')
console.log(arr)