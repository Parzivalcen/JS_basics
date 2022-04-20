function People() {
  this.superStar = "Michael Jackson";
}

// We add the property athele to the People() prototype, now every object created with People() will have acces to athlete.
People.prototype.athlete = "Tiger Woods";

let famousPerson = new People();
famousPerson.superStar = "Steve Jobs";

// The first place where it looks for the property is in famousPerson, and since we defined it there, it wont proceed further, we essencially overwrote the property on the famousPerson property, so the search will not continue up the prototype chain.
console.log(famousPerson.superStar); // Steve Jobs

// Here it goes back to Object.prototype, as all object inherits from it.
console.log(famousPerson.toString()); // [object Object]

// Here it look for athlete in famousPerson firts, but athlete is not there, so it goes to its parent which is the People() Constructor, the athlete property is in there and it stops. It shows it from the People.prototype.
console.log(famousPerson.athlete); // Tiger Woods
