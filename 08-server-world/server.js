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
    const personWorld = req.body;

    let personJson = null;

    for (let region of world.regions){
        for (let town of region.towns){
            for (let person of town.notable_people) {
                //check if the person is correct and we're not trying to move them into a place they already exist in
                if(person.name==personWorld.name && town.name.replaceAll(" ", "-")!=personWorld.world){
                    //save the person
                    personJson = person;
                    town.population-=1; //subtracting them from town population since they've moved
                    //remove the person from the town - splicing because it's an array
                    town.notable_people.splice(town.notable_people.indexOf(person), 1);
                    break;
                }
            }
            //stop looping if found person already
            if (personJson) break;
        }
        if (personJson) break;
    }

    console.log(personJson);

    //adding the person to the correct town if they don't already exist there
    if (personJson){
        for (let region of world.regions){
            for (let town of region.towns){
                if (town.name.replaceAll(" ", "-")==personWorld.world){
                    console.log("adding");
                    town.notable_people.push(personJson);
                    town.population+=1;
                }
            }
        }
    }


    await fs.writeFileSync("world.json", JSON.stringify(world));
    res.json(world);
})

app.listen(3000, ()=>{
    console.log("Server running on http://localhost:3000");
});

