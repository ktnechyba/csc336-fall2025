import express from "express"
import fs from "fs"

const app = express();

app.use(express.static("./public"));

app.use(express.json());

app.get("/world", async (req,res) =>{
    let world;
    try {
        let filecont= fs.readFileSync("world.json", "utf-8");
        world = JSON.parse(filecont);
    } catch(error){
        console.log("ERROR")
    }
    console.log(world.regions[0].name);
    res.json(world);
})

app.listen(3000)