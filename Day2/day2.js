// while loop is precondition loop ==> first check condition then execute the program

let i = 0
while (i <=5){ // first check 
    console.log("hello") // then execute
    i++
}
// ------------------------------------------------------------------------------------------------


// post condition loop ==> we use "do while" first execute and then check condition 
let j = 6
do {
    console.log("hello") // first print hello 

}while(j<=3) // then check condition

// ------------------------------------------------------------------------------------------------


// for loop

for ( let i=0; i<=5;i++){
    console.log("hello there")
}

// so when we should use while loop and for loop

// for loop ==> specific condition does not have any counter
// while loop => where counter matters

// ------------------------------------------------------------------------------------------------

//switch case ==> used mostly for pattern matching 

let day = "wed"

switch(day){
    case "mon":
    case "tue":
        console.log("7am")
        break  // we should use break because if any case matched remaining cases output will also print. 
    case "sat":
    case "sun":
        console.log("keep dreaming")
    default: // it will excute when day will not match any case like if day = "wed " and print hello there in cmd
        console.log("hello there")
}
// ------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------

// function
num1 = 2
num2 = 3
num3 = 4
function add(num1, num2,num3 =0){ //num3 = 0 here we passing default value of 3rd argument
    console.log(num1+num2+num3)
}

// add(num1,num2)

// ------------------------------------------------------------------------------------------------

// OBJECTS = these are like dictionary in python
let myCar = new Object()        //new is keyword that is used to intialise the instance of objectct type of javascript
myCar.color = "red"              // adding new element here "color" is key and "red" is its value
myCar.model = "BMW X5"           // here second key value pair
console.log(myCar)                // output==> { color: 'red' }


// // get model's value using dot notation
console.log(myCar.model) // output ==>BMW X5

let student = new Object()
student.name = "Deepak"
student.age = "24"
student.subjects = {eng:25,hindi:56}
student.highestEducation = "Btech"

console.log(student)