let world;

let people={};

async function getWorld(){
    let response = await fetch("/world");
    world = await response.json();
    // document.querySelector("body").innerHTML = `<h1>${world.regions[0].name}</h1?`
}

getWorld();

async function setup(){
    createCanvas(800,800);

    console.log("p5 works");

    await getWorld();

    for (let region of world.regions){
        console.log(region.name);
        for (let town of region.towns){
            for (let person of town.notable_people){
                people[person.name]= new Person(person);
            }
        }
        
    }
    colorMode(HSB);
}

function draw(){
    background(frameCount%360, 100, 100);
    for (let name in people){
        let person = people[name];
        person.update();
        
    }
    // console.log(frameCount);
}