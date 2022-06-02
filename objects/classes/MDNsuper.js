// calling methods from the parent class with super
class Cat {
  constructor(name) {
    this.name = name;
  }
  speak(){
    console.log(`${this.name} makes a noise`);
  }
}

class Lion extends Cat {
  speak(){
    super.speak();
    console.log(`${this.name} roars`)
  }
}

const king = new Lion('king')
king.speak()