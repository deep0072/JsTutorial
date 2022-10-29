// promise
const promise = new Promise((resolve, reject) => {
  resolve("good");
})
  .then((value) => {
    console.log(value); // value will be equal to the argument is givene in resolve
  })
  .catch((err) => {
    console.log(err); //value will be equal to the argument is givene in reject method
  });

const fs = require("fs");

new Promise((resolve, reject) => {
  fs.readFile("deep.txt", (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data.toString());
    }
  });
})
  .then((value) => {
    console.log(value); // value is refer to the params of resolve(data.toString())
  })
  .catch((err) => {
    console.log(err); // err ==> refer to 'reject' containing the 'err' as keyword reject(err)
  });
