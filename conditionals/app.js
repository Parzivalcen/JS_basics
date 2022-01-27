// ask User to enter its user Name
const user = window.prompt('enter user name');
// checks if the User Name is valid
if(user === 'admin'){
 // if the user name is valid ask for password
 const password = prompt('enter your password');
 if (password === 'TheMaster'){
  // if the pasword is valid, show welcome message
  alert('Hi there, Welcome');
  // If password is invalid
 }else if(password === ""){
  alert('canceled');
 }else{
  alert('Wrong Password')
 }

// Is user is Invalid stops
}else if(user === ""){
 alert('Canceled')
}else{
 alert('I dont know you')
}