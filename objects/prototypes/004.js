// Animal and Rabbit are Objects, they can not be used as constructors.
let animal = {
  eats: true,
};
let rabbit = {
  jumps: true,
};

// rabbit inherits the property from animal
rabbit.__proto__ = animal;

// Here the compiler looks for the eats property, first in the rabbit object, is not there, then looks for it on the animal object, it is there, so it stops.
console.log(rabbit.eats);

//

// Here a method() is added to the animal object
let animal1 = {
  eats: true,
  walk() {
    console.log("Animal Walk");
  }
};
// rabbit inherits that method() and all the other properties
let rabbit1 = {
  jumps: true,
  __proto__: animal1
};
rabbit1.walk();
// The prototype chain can be longer, here we add longEar, it inherits properties from rabbit1, and rabbit 1 inherits from animal1, so longEar has all the properties and methods from both objects
let longEar = {
  earLength: 10,
  __proto__: rabbit1
}
longEar.walk();
console.log(longEar.eats);