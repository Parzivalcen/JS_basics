
  const inputA = document.querySelector('.n-power');
  const para = document.querySelector('h1');




function pwd(a, b) {
  let result = a;

  for (let i = 1; i < b; i++){
    result *= a;
  }
  return result;
}
let a = prompt('a','')
let b = prompt('b','')

if (a < 1){
  alert('should be more than 1')
}else{
  alert(pwd(a, b))
}
  // input.addEventListener('change', () => {
  //   const num = parseFloat(input.value);
  //   if (isNaN(num)) {
  //     para.textContent = 'You need to enter a number!';
  //   } else {
  //     para.textContent = `${num} squared is ${squared(num)}. `;
  //     para.textContent += `${num} cubed is ${cubed(num)}. `;
  //     para.textContent += `${num} factorial is ${factorial(num)}. `;
  //   }
  // });