const EventEmitter = require("events");
const emitter = new EventEmitter();

const eventCounts = {
    "user-login": 0,
    "user-logout" :  0,
    "user-purchase" : 0,
    "profile-update" : 0
}

// Event listener

emitter.on("user-login" , (username) =>{
    eventCounts["user-login"] += 1;
    console.log(`${username} User logged in`);
});

emitter.on("user-logout" , (username) =>{
    eventCounts["user-logout"] += 1;
    console.log(`${username} User logged out`);
});

emitter.on("user-purchase" , (username, item) =>{
    eventCounts["user-purchase"] += 1;
    console.log(`${username}  made a purchase ${item}`);
});                                 

emitter.on("profile-update" , (username, field) =>{
    eventCounts["profile-update"] += 1;
    console.log(`${username}  updated their ${field}`);
});

emitter.on("Summary", () => {
    console.log("Event Summary:" ,eventCounts);          
}
);

// emit some events 

emitter.emit("user-login", "Alice");
emitter.emit("user-logout", "Alice");
emitter.emit("user-purchase", "Alice", "laptop");
emitter.emit("profile-update", "Alice", "data engineer");

emitter.emit("Summary");