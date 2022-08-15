// functions

// anonymous func=> function without name and assign to varibale

let add = function (n1, n2) {
  return n1 + n2;
};

console.log(add(45, 78));

//---------------------------------------------------------------------------------------------

//arow function =. it is also anonymous function but it does not contain "function" keyword and have arrow symbol "=>"

let sum = (n1, n2) => {
  return n1 + n2;
};

console.log(sum(90, 90));

//---------------------------------------------------------------------------------------------

// // constructor in javascript => intialised with function but contain "this" keyword that followed by key and then assigned to params

function Student(name, age, section) {
  this.Name = name;
  this.Age = age;
  this.Section = section;
}

let obj = new Student(); //creating instance

obj.Name = "Deepak"; // with the help of dot notation give key value here key should match that is declated inside the function
obj.Age = 45;
obj.Section = "A";

console.log(obj);
