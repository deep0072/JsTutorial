// when we intialise the variable empty then it will be undefined

// post increment

let x = 6;
let x1 = x++; // here x value first assigned to x1 and then x value incremented by 1
console.log(x1, x); // output  6 7

// pre increment

let num = 6;
let num1 = ++num; // here num valriblae first incremented by 1 and then assigned to num1
console.log(num, num1); //output 7,7

//compare using ==
let num1 = 8;
let num2 = "8";
result = num1 == num2; // double equal only compare the values not its type thats why it showing true
console.log(result); ==> true

//compare using ===
let num1 = 8;
let num2 = "8";
result = num1 === num2; // it will compare its type and value also
console.log(result); // output is false

// template literal
/*
it is like format string in  python. ${pass variable here}
*/
let num = 3;
let num1 = 4;
let result = num + num1;
console.log(`result is ${result}`);

function checkOddEven(num) {
  if (num % 2 === 0) {
    console.log(`even ${num}`);
  } else {
    console.log(`odd ${num}`);
  }
}

checkOddEven(6);

// logical operator == > return True and false

// AND ==> &&
//or ==> ||
//not ==> !
// compare 3 number
// num1 = 3;
// num2 = 4;
// num3 = 5;

if (num1 > num2 && num1 > num3) {
  console.log(num1, "it is greatest");
} else if (num3 > num1 && num3 > num2) {
  console.log(num3, "is not greatest");
}

// ternary operator==> condition ? ouput : output

function checkOddEvenwithTernary(num) {
  result = num % 2 === 0 ? "even" : "odd";

  console.log(result);
}

checkOddEvenwithTernary(5);

// WHILE LOOP

let i = 1;

while (i <= 5) {
  console.log("hello");
  i++;
}

//for loop
