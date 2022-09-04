let user = {
    name:"deepak",
    age:25
}

console.log(user.name) // get name key's value using dot notation

// iterate thorugh key 

for (let key in user){
    console.log(key) 
    // deepak
    // name
    // age
}

// convert obj to json using stringyfy
console.log(JSON.stringify(user)) // output {"name":"deepak","age":25}

/* iterator == > lots of control our collection.ege. array , object
 means we can trarverse array, object etc
 with the help of for loop, while, do while etc.
 
 
 
 */