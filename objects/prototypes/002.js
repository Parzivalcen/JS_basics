// Creating an object with the Object Literal
let myFriends = { name: "Pete" };

// When we call for a prototype in an object, it first look for that property in the object itself then, to its parent and then to its grand parent, and it goes like that until it finds the property that we are calling.

//To find the name property bellow, the search begins in the myFriends object, and it stops because the property we are looking for is there. This could be a prototype chain wiht one link
console.log(myFriends.name);

// Here the search for the toString() method will begin in the myFriends obj, but is not there, then the compiler will search for it the my friends prototype, which is the object it inherited its properties from).

// Since all the projects created with object literal, inherits from the Object.prototype, the toString method is found on the Object.prototype.
myFriends.toString();
