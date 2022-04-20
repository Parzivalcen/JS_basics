// Every js function has a prototype property(empty by default), we atach properties and methods on this prototype
function printStuff(myDocs) {
  this.documents = myDocs;
}

// adding the print method to printStuff constructior, other instances of this object will inherit it.

// We add the print() method to the printStuff constructor, now all the new object creted from it(instances) will inherit it.
printStuff.prototype.print = function () {
  console.log(this.documents);
};

// The new object inherited all the new properties and methods from the printStuff fucntion, it can call print directly.
const docs = new printStuff("hi, these are my documents");
docs.print();

// Prototype attribute
// In simple terms, this point to the objects parent, the object it inherited its properties from.

//

// PROTOTYPE PROPERTY: Prototype-based Inheritance
function Plant() {
  this.country = "Mexico";
  this.isOrganic = "true";
}

// Add show name and color method to Plant property
Plant.prototype.showNameAndColor = function () {
  console.log("I am a " + this.name + " and my color is " + this.color);
};

// Add amIOragnic method to Plant property
Plant.prototype.imIOrganic = function () {
  if (this.isOrganic) {
    console.log("I am Organic");
  } else {
    console.log("I am not organic, but you can still eat me");
  }
};

// Create constructor for fruit
function Fruit(name, color) {
  this.name = name;
  this.color = color;
}

// Make Fruit inherit the prototypes from Plant cosntructor
Fruit.prototype = new Plant();

// create a new object called aBanana
let aBanana = new Fruit("Banana", "Yellow");
aBanana.showNameAndColor();
aBanana.imIOrganic();
console.log(aBanana.prototype);
// Any objects that uses the Fruit constructor wiil inherit the Fruit.prototype properties and methods from the Fruit's prototypes and Plant.prototype. This is how inheritance is implemented in JS.
