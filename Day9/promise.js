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
