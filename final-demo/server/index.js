import express from "express";
import cors from "cors"; //npm install cors

const app = express();

app.use(express.static("./public")) //hosting the frontend that's served up by anyone

app.use(express.json());
app.use(cors())


// "api/data" can be anything
app.get("/api/data", (req,res) => {
    console.log("hello from API endpoint /api/data");
    res.json({
        something: 124544
    })
})

app.listen(3000);