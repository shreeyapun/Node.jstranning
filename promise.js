// const fs=require("fs");
// const path=require("path");


// const fileName="shreeya.txt";
// const filePath=path.join(__dirname,fileName);

// const writeFileExample= async ()=>{
//     try{
//         await fs.promises.writeFile(filePath,"Hello Diana!","utf-8");
//     }catch(err){
//         console.log(err);
//     }
// };
// writeFileExample();


// async function writeFileExample(){
//     await fs.promises.writeFile(filePath,"hehehe","utf-8");
//     console.log("its working");

// }
// writeFileExample();


//READ FILE
const fs=require("fs");
const path=require("path");
const fileName="shreeya.txt";
const filePath=path.join(__dirname,fileName);
async function readFileExample(){
    try{
        const data= await fs.promises.readFile(filePath,"utf-8");
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
};
readFileExample();



// UPDATE FILE
const fs1=require("fs");
const path1=require("path");
const fileName1="shreeya.txt";
const filePath1=path1.join(__dirname,fileName1);
async function updateFileExample(){
    try{
        await fs1.promises.appendFile(filePath1,"\n How are you?","utf-8");
        console.log("file updated");
    }
    catch(err){
        console.log(err);
    }
};
updateFileExample();


//DELETE FILE
const fs2=require("fs");
const path2=require("path");
const fileName2="shreeya.txt";
const filePath2=path2.join(__dirname,fileName2);
async function  deleteFileExample (){
    try{
        await fs2.promises.unlink(filePath2);
        console.log("file deleted");
    }
    catch(err){
        console.log(err);
    }
};
deleteFileExample();