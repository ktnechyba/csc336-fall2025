const fs = require('fs'); //call libraries files modules

let programCount=0;
try {
    let filecontnet= fs.readFileSync("programCount.txt", "utf8");
    console.log(filecontnet);
    programCount=JSON.parse(filecontnet);
} catch(error){
    console.log("Error happened: probably because the file doesn't exist that w tried to open");
    fs.writeFileSync("programCount.txt", JSON.stringify(programCount));
}
programCount++;
// console.log(programCount);
fs.writeFileSync("programCount.txt", JSON.stringify(programCount));

/*Server in Node.js using Express.js -> lilstens to HTTP requests
(GET- read)
(POST (crud) )
(PUT - updating)
(Delete - Del)


Node Package Manager - NPM -> node's pip
*/