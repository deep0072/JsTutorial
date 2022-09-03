function checkEven(x) {
  if (x % 2 !== 0) {
    return "odd";
  }
  else {
    return "even"
  }
}

function getPromise(x) {
  // intilise the promise constructor
  let promise = new Promise((resolve, reject) => {
    // trigget cehckEven function
    let result = checkEven(x);
    console.log(result)

    // if even
    if (result === "odd") {
      //get the resolve
      setTimeout(() => {
        resolve("ye you got the odd");
      }, 2000);
    } 
      // incase of odd throw reject
    setTimeout(() => {
    reject( new Error("no it is  even"));
    }, 5000);
    
  });
  // return promise

  return promise;
}

let promise = getPromise(6);

// this consumer function which will take promises output whether it is resolve or reject
checkPromise = () => {
  // initilise the promises  function
  promise.then(function (result) {
    console.log(result);
  });
  promise.catch(function (error) {
    console.log(`wrong ${error.message}`);
  });
};

checkPromise();
