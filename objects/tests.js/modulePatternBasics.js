////// MODULE PATTERN BASICS ////////
//
// Public METHOD EG //
let myModule = (() => {
  // Create a public method for our module to call, only the public methods can be called outside the function
  return {
    publicMethod: () => {
      console.log("Hello Im a method");
    },
  };
})();
myModule.publicMethod();

// Private METHODS and Properties
// Using clousures we can create private methods, closures are variables that can be only read from inside the function.
let myModule2 = (() => {
  let _privateProperty =
    "Hello i'm a private property, that you are accesing through a public method :)))"; // << _ >> signifies that is private.
  function _privateMethod() {
    console.log(_privateProperty);
  }
  return {
    publicMethod: function () {
      _privateMethod();
    },
  };
})();
myModule2.publicMethod();
