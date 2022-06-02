class User {
  constructor(name){
    // invokes setter
    this.name = name;
  }
  get name () {
    return this._name;
  }
  
  set name(value) {
    if (value.length < 4){
      console.log('Name is too short');
      return;
    }
    this._name = value;
  }
  sayHi(){
    return `Hi ${this.name}`
  }
}
let user = new User('John');
console.log(user.sayHi());

class Button {
  constructor(value){
    this.value = value;
  }
  click(){
    console.log(this.value);
  }
}
let button = new Button('Hi');
setTimeout(() => button.click(), 1000);