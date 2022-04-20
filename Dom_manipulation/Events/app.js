// show message when button is pressed
// get button from html 
// add event listener for click
// show message whe clicked 

const btn = document.querySelector('.btn');
btn.addEventListener('click', () =>{
  alert('Hello world');
})
btn.addEventListener('click', function (e) {
  e.target.style.background = 'blue';
})

// Using named functions can clean up your code 
const functBtn = document.querySelector('.btn_name_func');
functBtn.addEventListener('click', alertClickMe);

function alertClickMe(){
  alert('YEY, YOU DID IIIITT');
}




