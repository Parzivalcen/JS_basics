function Student(name, grade){
  this.name = name;
  this.grade =grade;
}
// is important that we define functions on the prototype of the object, like this all the objs inherit the function, if we defined it in the object itself, the function gets duplicated everytime we create a new objt. 
Student.prototype.sayName = function(){
  console.log(this.name);
}
Student.prototype.goToProm = function(){
  console.log("Can we go to prom together");
}

// 
// inheritance

// EightGrader inherits the properties from Student
EightGrader.prototype = Object.create(Student.prototype);

const carl = new EightGrader('Carl');
carl.sayName()