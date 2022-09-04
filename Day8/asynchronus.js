function func(){
    console.log("func1 starting....")
    func2()
    console.log("func1 ending.....")
}

function func2(){
    setTimeout(()=>{
        console.log("func2 starting"),0 // it pause the function func2 

    }) 
 
}
func() 
/* output ==> 
func1 starting....
func2 starting
func1 ending.....*/