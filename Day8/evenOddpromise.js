let result;

function checkEven(x) {
  if (x % 2 !== 0) {
    return "odd";
  } else {
    return "even";
  }
}

function getPromise(x) {
  // intilise the promise constructor
  let promise = new Promise((resolve, reject) => {
    // trigget cehckEven function
    result = checkEven(x);
    console.log(result);

    // if even
    if (result === "odd") {
      //get the resolve
      setTimeout(() => {
        resolve(console.log("ye you got the odd"));
      }, 2000);
    } else {
      setTimeout(() => {
        resolve(console.log("ye you got the even"));
      }, 2000);
    }
    // incase of odd throw reject
    setTimeout(() => {
      reject(new Error("No digit entered"));
    }, 5000);
  });
  // return promise

  return promise;
}

let promise = getPromise("igkjidfg1w");

checkPromise = () => {
  // initilise the promises  function
  promise.then(function () {
    console.log(`Done with an ${result} number`);
  });
  promise.catch(function (error) {
    console.log(`wrong ${error.message}`);
  });
};

checkPromise();