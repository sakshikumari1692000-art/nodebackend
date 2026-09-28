const fs = require('fs/promises');
const path =  require('path');

const fileName = "fasyncawait.txt";
const filePath = path.join(__dirname, fileName);

const writeFileExample = async () => {
    try{
         await fs.writeFile(filePath, "This is Asysnc Await Exmple", "utf8")
    }catch(error){
        console.error(error);
    }
}

writeFileExample();

const readFileExample = async () =>{
    try{
      const data =  await fs.readFile(filePath, "utf8")
      console.log("File is read successfully", data);
    }
    catch(error){
        console.log(error);
    }}

readFileExample();

const appendFileExample = async () =>{
    try{
        await fs.appendFile(filePath, "\nThis is appened Async Await Example", "utf8")
    }
    catch (error){
        console.error(error);
    }
}

appendFileExample();

const deleteFileExample = async () =>{
    try{
        await fs.unlink(filePath);
    }
    catch(error){
        console.error(error);
    }
}

deleteFileExample();