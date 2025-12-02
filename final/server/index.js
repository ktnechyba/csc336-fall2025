import express from "express";
import cors from "cors";


const app = express();

app.use(express.static("./public"))
app.use(express.json());
app.use(cors());

app.get("/api/data", (req,res) => {
    console.log("final")
    res.json({
        something: 124544
    })
})

app.listen(3001);