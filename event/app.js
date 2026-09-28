const EventEmitter = require('events');

//create instance of eventEmitter
const emitter = new EventEmitter();

// define an event listener 

// emitter.on('messagegreet', () => {
//     console.log("Hello greet event is triggered");
// })

// // define trigger(emit) the "greet" event

// emitter.emit("messagegreet");

// emitter.on('messagegreet', (userName, profession) => {
//   console.log(`Hello ${userName}, greet event is triggered, you are a ${profession}`);
// })

// emitter.emit("messagegreet", "Sakshi", "Full stack developer");

emitter.on('messagegreet', (arg) => {
  console.log(`Hello ${arg.name}, greet event is triggered, you are a ${arg.profession}`);
})

emitter.emit("messagegreet",{name : "Sakshi", profession: "Full stack developer"});