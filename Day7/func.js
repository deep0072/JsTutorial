//call back, higher order function, closure

//call backs
// these are the function that passed as an parameter in other function

/*lets say a function that adding two number after its result 
a second function should be triggered that send some repsonse after getting rsult from first function  */

//higherOrder function ==> Functions in which the function is passed as the parameter is called higher order function

// function Add(a,b, handle){
//     let result  = a + b

//     handle(result) // handle is callback function 
// }

// function getRequest(result){
//     console.log(`getting result ${result}`)
// }


// let result = Add(5,4,getRequest) // add is the higher order function that cause the trigger of call back function which is getRequest
// console.log(result)


/*a closure==> gives you access to an outer function's scope from an inner function.
In JavaScript, closures are created every time a function is created, at function creation time*
means a inner function that can access all variable that is assigned in outer function*/

function outer(){
    console.log("outer function")
    let num1 = 5
    return function (){  // this is the function  which has lexical scope means it can access the outer function  variable
        let num2 = 6
        console.log("inner function" , num1 ,num2)
    }

}

let result = outer() 
result()  // it will trigger the return of outer function that is already called or means it reffering the return of outer function 