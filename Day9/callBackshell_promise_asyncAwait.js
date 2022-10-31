/*
 this is call back hell multiple call back called internally

*/

let promise = () => {
  setTimeout(() => {
    console.log("boil water"); // wait  for 10 second then print this line
    setTimeout(() => {
      console.log("add kofee powder"); // after 10 second this function is called wait for 2 second
      setTimeout(() => {
        console.log("add sugar as per taste"); // then wait for one second this line print
        setTimeout(() => {
          console.log("serve coffe");
        });
      }, 1000);
    }, 2000);
  }, 10000);
};

promise();

//--------------------------------------to avoid call back hell use Promise

let promise = (time, work) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${work}   ${time} ms`);
    }, time);
  });
};

promise(10000, "boil water")
  .then((data) => {
    console.log(data);
    return promise(2000, "Add coffee water and let remain it on flame ");
  })
  .then((data) => {
    console.log(data);
    return promise(1000, "add sugar and let remain it  on flame");
  })
  .then((data) => {
    console.log(data);
    return promise(0000, "serve coffee");
  })
  .then((data) => {
    console.log(data);
  });

//-----------------------------------------------------------------------
// // now to remove headace of calling then keyword multiple time  etc. use async await. it make code more cleaner
let promise = (time, work) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${work}   ${time} ms`);
    }, time);
  });
};

const caller = async () => {
  let step1 = await promise(1000, "boil water");
  console.log(step1);
  let step2 = await promise(
    2000,
    "Add coffee water and let remain it on flame "
  );
  console.log(step2);
  let step3 = await promise(1000, "add sugar and let remain it  on flame");
  console.log(step3);
  let step4 = await promise(0, "serve coffee");
  console.log(step4);
};

caller();
