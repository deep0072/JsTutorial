const eventEmit = require("events"); //used  to listen event from clientside and give the output

const eventEmitter = new eventEmit(); // intiate the event object

eventEmitter.on("mySimpleEvent", (msg) => {
  console.log(msg);
});

eventEmitter.emit("mySimpleEvent", "oh you clicked the button"); // so it is like we do onlick button in front end and changes some state.
// .emit() method is just trigger the event. and give the output that is passed as an 2nd param
