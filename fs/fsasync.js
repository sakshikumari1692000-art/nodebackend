const fs = require('fs');
const path = require('path');

const fileName = "fsAsync.txt";
const filePath = path.join(__dirname, fileName);
  
fs.writeFile(filePath, "This is Async data", "utf8", (err) =>{
    if(err) console.log(err);
    else console.log("File written successfully");
})

fs.readFile(filePath, "utf8", (err, data) => {
    if(err) console.log(err);
    else console.log(data,"File read successfully");
});

fs.appendFile(filePath, "\nThis is Async append data", "utf8", (err) =>{
    if(err) console.log(err);
    else console.log("File appended successfully");
})

fs.unlink(filePath,(err) =>{
    if(err) console.log(err);
    else console.log("File deleted successfully");
})