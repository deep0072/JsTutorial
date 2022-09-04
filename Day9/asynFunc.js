/*
async contain promise,reject, pending functionality

// promise always gets higher priority



*/


async function f(){
    let promise = new Promise((resolve,reject)=>{
        setTimeout(()=>resolve("helo"),2000)
    })
    let result = await promise // await is use to wait for 2 secodn as it mentioned above till  promise completed
    return(`ok ${result}`)

}

// f()

function getTime(){
    return(`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`)
}


function syncMSg(){
    return("hello there")
}

function promiseMsg(){
    return Promise.resolve("hello promise there")
}

function msgWithDelay(){
    let promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("hello with delay")},5000
            )
        })
    return promise
}

async function callFunction(){
    const msgDelay = await msgWithDelay()
    console.log(`${getTime()} : in ${ msgDelay}`) // delay for 5 sec 
    const msgSync = syncMSg()

    console.log(`${getTime()} : in ${msgSync}`) 
    const msgPromise = promiseMsg()
    console.log(`${getTime()} : in ${await msgPromise}`) // fetch resolve. but if we dont use await then it will returun promise object
   
}

callFunction()