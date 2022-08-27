// map reduce filter,

// let values = [1, 2, 3, 4, 5, 6];

// result = values
//   .filter((item) => item % 2 === 0) //output===> [2,4,6]
//   .map((item) => item * 2) // output===> [ 4, 8, 12 ] after filtering
//   .reduce((result, item) => result + item ,0); // here zero is the intital value of result variable and output ===> 24

// console.log(result, "result")

//---------------------------------------------------------------------->>>

// array destrucuturing
// let [a,b,c,d,e,f,g] = values
// console.log(a)

// now if i want to assign all variable in d using ... that is called "rest parameter" will return new array
// let [a,b,c, ...d] = values
// console.log(d) //output ==> [ 4, 5, 6 ]

// let string1 = "deepak chiku puneet ,ironman, hawkeye"
// let [name, ...otherNames] = string1.split(" ")
// console.log(otherNames)

// --------------------------------------------------------------------
// array index number starts with 0
// let values = [5,"Navin", {comp:'Deep'},()=>{
//     console.log("yo sup?")
// }]

// console.log(values) // output ===> [ 5, 'Navin', { comp: 'Deep' }, [Function (anonymous)] ]
// values[3]() // output==> yo sup?

//=============================================================

let values = [24, 5, 6];
console.log(values.push(1)); // add the element at end of array
console.log(values.pop()); // pop the last index element from array

/*The shift() method in JavaScript removes an item from the beginning
 of an array and shifts every other item to the previous index,*/
console.log(values.shift());
//=====================================================
/*unshift() method adds an item to the beginning of an array 
while shifting every other item to the next index*/
values.unshift(5);

console.log(values) //output ==> [ 5, 5, 6 ]
