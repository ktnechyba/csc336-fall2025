import express from "express"

const app = express();

const PORT = 3000;

let count = 0;

//start the server on a specified port
app.listen(PORT, (req, res)=>{
    console.log("Server Started");
});

//provide in string path to url you're loooking for
app.get("/test", (req,res)=>{
    console.log("Someone made a git request with a 'test' endpoint")
    count++;
    res.send("Hi, there. This is the server speaking " + count)
});