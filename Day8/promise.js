let promise = new Promise(function(resolve, reject){

    // lets pretend jack and jill have to take time to bring the water
    setTimeout(() => {
        resolve("ye we got the water")
    }, 2000);

    // if jack and jill dont get the water then reject will trigger
    // if we use here like if postion === "feel down " then it will  trigger the reject
    setTimeout(() => {
        reject(
            new Error(" jack and jill fell down")
        )
    }, 2000);
})


// consumer function that will take promise
const grandParents =  ()=>{

    // // then will indicate that promise has been full filled
    promise.then(function(resolce){
        console.log(` lets cook food ${resolce}`)
    })

    // based on declared above promise it will trigger the catch or resolve
    promise.catch(function(error){
        console.log(`omg we cant cook the food because ${error.message}`)

    })
}
grandParents()
