import express from "express";

//instance of express server
const app = express();


//pass in name of folder that holds frontend folder
app.use(express.static("./public"));

//allow to send json over
app.use(express.json());

//route = parts of url you go to -> /api/blahblah/blahcslhdfi
app.get("/api/randomNumber", (req, res)=> { //requests have header and body, response is the return w/ header and body
    res.send(Math.random()) //.send sends a string over
})

app.post("/api/add", (req, res)=>{
    console.log(req.body.name)
    req.body.name+="???"
    res.json(req.body);
})

//listen to a port
app.listen(3000);