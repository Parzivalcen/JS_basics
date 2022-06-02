
// Static functions and prototypes can only be called through the class iterations
class Animal{
  constructor(name){
    this.name = name;
  }
  speak() {
    console.log(`${this.name} is making a noise.`);
  }
  static eat(){
    console.log(`${this.name} is eating hmmmhm.`);  }
}
// let obj = new Animal();
// let speak = obj.speak;
// console.log(speak());

// sub classing with EXTENDS
// with EXTEND we can create a class a child of another class
class Dog extends Animal {  
  constructor(name){
    // super constructor allow us to add a constructor to the child class, otherwise we can't 
    // with super we can also call functions from the parent
    super(name);
    
  }

  speak(){
    super.speak();
    console.log(`${this.name} barks.`)
  }
}

let Paul = new Dog('Paul');
Paul.speak();

