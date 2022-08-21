function Animal(value) {
  var obj = {};
  obj.name = value.name;
  return obj;
}

function Dog(value) {
  var obj = Animal(value); // calling base function with 
  obj.greet = function () {
    console.log(`hello there ${obj.name}`); // obj.name already instialised in Animal(value)
  };
  return obj;
}

var myDog = Dog({ name: "snoopDawg" });
myDog.greet();

