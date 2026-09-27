const fs = require('fs');
const path =  require('path');

const fileName = "fsPromise.txt";
const filePath = path.join(__dirname, fileName);

const file = __dirname;
// fs.promises
// .readdir(file)
// .then((data) => console.log(data))
// .catch((err) => console.log(err));

fs.promises.writeFile(filePath, "HEllo to the promise world" , "utf8")
.then(console.log("File is created"))
.catch((err) => console.log(err));

fs.promises.readFile(filePath, "utf8")
.then((data) => console.log(data))
.catch((err) => console.log(err));

fs.promises.appendFile(filePath, "\nThis is promise append file", "utf8")
.then(console.log("File is appended"))
.catch((err)=> console.log(err));

fs.promises.unlink(filePath)
.then(console.log("File is deleted"))
.catch((err) => console.log(err));