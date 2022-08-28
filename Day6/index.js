// array index always starts with 0th index
let values = [24, 5, 6];

console.log(values[3])// it will give the undefined output when array index out of the range

//=====================================================================================================

let values = [5, "deepak", {comp: "Deep"}, ()=>{
    console.log("hello")
}]

// values[3]() // output ==> hello

let values = [42,56,89,7,65]
console.log(values)

// // add value in values using push
values.push(1)
console.log(values) // new array [ 42, 56, 89, 7, 65, 1 ]

// //pop method => remove the last eolement from an array

values.pop()
console.log(values) // output =>[ 42, 56, 89, 7, 65 ]

// // shift method ==> it will  remove the first element from an array
values.shift()
console.log(values) // ==> [56, 89, 7, 65 ]

// // unshift ==> will take argument and add at the starting of array

values.unshift(69)
console.log(values) // ==> [ 69, 56, 89, 7, 65 ]

// ==================================================================================================

// values = []
// values[0] = 45
// values[50] = 500

// console.log(values) // ===> [ 45, <49 empty items>, 500 ] it will assigned values 0th index and 50 th index and remaining will be undefined

// accessing the values from an array using for in loop
for (let i in values){ // here i will be index
    console.log(values[i]) // this will give only assigned values but undefined will be discarded by using this loop
}

// // what if i wanted to  print all the values from array itself even thoug they are undefined
for (let i of values){ // i is the exact value
    console.log(i)  // it will  print all the values
}

//========================================================
//splice ==> this method will delete the elements in range that is  starting and end point
values = [56,89,3,4]
values.splice(0,2) // 0 th index to 2nd index that is 56 , 89 will be removed from an array
console.log(values) // [ 3, 4 ]

//==============================================================
// for each ==> internal roop fetch the values from array takes parameter
values = [56,89,3,4]

values.forEach(element =>console.log(element)
    // 56
    // 89
    // 3
    // 4

);

//=============================================================
// filter ==> it is method takes function and based on condition filter out the each element from an array and return true and false. if we use return then it will give array
values = [56,89,3,4]
values.filter((num)=>{
    return num%2==0}) // filter out the even number
    .forEach(element => {
        console.log(element) // print the filtered number

    });
//===================================================================
// map ==> this is method which will apply some condition on each element of array. like double the each element of array and return array
// also it not changes the existing array.
values = [56,89,3,4]
values.map((num)=>{
    console.log(num*2) // take element from an array and multiply each number by 2
    // output is
    // 112
    // 178
    // 6
    // 8
})

//======================================================================================================
/* reduce ==> it will reduce the filtered array into one value lets say give the sum of filtered array 
reduce takes two parameter. first is cummulative and second one is actual value
commulative means ==> in case of sum it will take sum of current value,  and previus value
we can  pass 3rd parameter that is intial value 
*/
values = [45, 88, 66, 75, 9, 36, 1];
reducedVal = values
  .filter((num) => num % 2 === 0)
  .reduce((sum, currentval) => {
    return sum + currentval; // sum of filtered even number
  }, 2);
console.log(reducedVal); // 154
// ======================================================================================================

// lets perform all the operation
// first filter out the odd number from an array
// double each filtered numbr
// add the doubled number 
// print the number

values = [45, 88, 66, 75, 9, 36, 1];

let val = values
  .filter((num) => {
    return num % 2 != 0; //filter odd [45,75,9,1]
  })
  .map((num) => {
    return num * 2; // double each filtered number [90,150,18,2]
  })
  .reduce((sum, num)=>{
    return (sum+num) // 260
  })
 
console.log(val);

=========================================================================================
destructuring ==> assgined all values of array in  single varaible using three dot

let values = [45,56,89,10]
let [a,...b] = values
console.log(b) // output [ 56, 89, 10 ]

//==========================================================================================
// rest and spread operator
function sum(a,b,...nums){ // as parameter ...nums is rest parameter
    let result = a+b
    for (let num of nums){
        result  = result + num
    }
    return result
}


let result = sum(3,4,67,7,6,32,656)
console.log(result, "result")


function sum(a,b,c){ //here spread operator become destructured in to variable
    let result = a+b+c
    
    return result
}

let nums = [2,3,6]
let result = sum(...nums) //  as an argument know its spread operator
console.log(result, "result")





