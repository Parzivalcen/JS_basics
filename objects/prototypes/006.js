// This is always the object before the dot. 

/*
animal has 2 methods
Walk() which if isSleeping is false, will print <<I walk>>
*/ 

let animal = {
  walk(){
    if(!this.isSleeping){
      console.log("I Walk");
    }
  },
  sleep(){
    this.isSleeping = true;
  }
}
console.log(animal.isSleeping); // undefined, animal cannot call <<this>> on its own I guess. But we can change its state

// animal.walk();//If we change it to false <<I walk>> is printed. 

/* rabbit inherits the properties and methods from animal */
let rabbit = {
  name: "White Rabbit",
  __proto__: animal
}

rabbit.sleep();
console.log("sleeping situation", rabbit.isSleeping);
rabbit.walk();