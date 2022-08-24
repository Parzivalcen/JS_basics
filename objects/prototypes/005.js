// The prototype is only used for reading properties.

let animal = {
  eats: true,
  walk(){
    // this method wont be used by rabbit
  }
}

let rabbit = {
  jumps:true,
  __proto__: animal

}
// Here we difine its own walk method to rabbit
rabbit.walk = function(){
  console.log("Jump, Jump, Bow")
}
// The compiler finds the method directly on rabbit, it does not go back further. 
rabbit.walk();