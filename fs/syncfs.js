const fs = require("fs");
const path = require("path");
const fileName = "text.txt";

const filePath = path.join(
    __dirname, fileName
)
const writeFile = fs.writeFileSync(filePath, "Hello my updated test file","utf-8");

console.log("File written successfully updated", filePath);

const readFile = fs.readFileSync(filePath, "utf-8");
console.log("File read successfully", readFile);

const appendFile = fs.appendFileSync(filePath, "\nHello my appended test file", "utf-8");

console.log("File appended successfully", filePath);

// const fileDelete = fs.unlinkSync(filePath);
// console.log("File deleted successfully", filePath);

const newFilepath = path.join(__dirname, "newText.txt");

const fileRename = fs.renameSync(filePath, newFilepath);
console.log("File renamed successfully", fileRename);