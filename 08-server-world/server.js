import express from "express";
import fs from "fs";

const app = express();

app.use(express.static("public"));

app.use(express.json());

app.get("/world", async (req, res) => {
    const dataString = await fs.readFileSync("world.json", "utf-8");
    const dataObject = JSON.parse(dataString);
    res.json(dataObject);
});

app.post("/update", async (req,res) => {
    const worldData = await fs.readFileSync("world.json", "utf-8");
    const world = JSON.parse(worldData);
    const personAddItem = req.body;
    for (let region of world.regions){
        for (let town of region.towns){
            for (let person of town.notable_people) {
                //prevent the new item from being added to everyone
                if(person.name===personAddItem.name){
                    person.items.push(personAddItem.item);
                }
                
            }
        }
    }

    await fs.writeFileSync("world.json", JSON.stringify(world));

    res.json(world);
})

app.listen(3000, ()=>{
    console.log("Server running on http://localhost:3000")
});

