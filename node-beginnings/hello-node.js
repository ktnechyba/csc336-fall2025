// console.log("Hello Node");

// for (let i=0; i<10; i++){
//     console.log("Haha")
// }

let random = [];
for (i=0; i<10; i++){
    let rand = Math.random();
    random[i] = rand;
    // console.log(random[i]);
}

const fs = require('fs'); //file system - import library using "Common" JS

// let str='';

// for(let rand of random){
//     str+= rand+"\n";
// }

fs.writeFileSync("randomNum.txt", JSON.stringify(random));//write file synchronously -> hold computer until done writing

let filecontent = fs.readFileSync("./randomNum.txt", "utf8") // ./ read at the current location of the node
//second argument shows what type of data the file is

let content = JSON.parse(filecontent)

console.log(content[0]);