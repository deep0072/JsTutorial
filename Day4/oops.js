// classes with constructor
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }
}

// personObj = new Person("deepak");
// personObj.greet();

//========================================================================================================

// inheritance and super keyword
// inheriting parent class Person using extend keyword
/*super keyword ==>>> lets child class use same name function as defined in parent so we want to 
use original one also then we use super keyword to use parent class's function */

class Student extends Person {
  constructor(name, age) {
    super(name); // here we calling parent class constructor using super class NOW WE CAN ADD EXTRA PARAMS IN CHILD CONSTRUCTOR ALSO
    this.age = age;
  }
}

let student1 = new Student("Jack", 25);
student1.greet();
console.log(student1.age);
