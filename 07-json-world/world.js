import * as fs from 'fs'

let theWorld = fs.readFileSync("world.json", "utf8")

let worldContent = JSON.parse(theWorld);

// console.log(worldContent);
// console.log(worldContent['regions'][0])

// for (var key in worldContent['regions']){
//     console.log(worldContent['regions'][key])
// }

// if (worldContent.regions[0].towns[0].notable_people[1].items[4].hasOwnProperty("cat food")){
//     console.log('yeah!')
// }

for ( let i=0; i<Object.keys(worldContent.regions).length; i++){
    // console.log(i)
    for (let k=0; k<Object.keys(worldContent.regions[i].towns).length; k++){
        console.log(`\nRegion ${JSON.stringify(worldContent.regions[i].name)}'s town #${JSON.stringify(k +1)}, named ${JSON.stringify(worldContent.regions[i].towns[k].name)}`)
        console.log(`The following town ${JSON.stringify(worldContent.regions[i].towns[k].name)} has ${Object.keys(worldContent.regions[i].towns[k].notable_people).length} people.`);        
        for (let m=0; m<Object.keys(worldContent.regions[i].towns[k].notable_people).length; m++){
            console.log(`\n${JSON.stringify(worldContent.regions[i].towns[k].notable_people[m].name)} has ${Object.keys(worldContent.regions[i].towns[k].notable_people[m].items).length} items:`)
            for (let p=0; p<Object.keys(worldContent.regions[i].towns[k].notable_people[m].items).length; p++){
                if (worldContent.regions[i].towns[k].notable_people[m].items[p].hasOwnProperty("cat food")){
                    console.log(`${JSON.stringify(worldContent.regions[i].towns[k].notable_people[m].items[p]["cat food"].type)} cat food of the brand ${JSON.stringify(worldContent.regions[i].towns[k].notable_people[m].items[p]["cat food"].brand)}`)
                } else if(worldContent.regions[i].towns[k].notable_people[m].items[p].hasOwnProperty("dental cat treats")){
                    console.log(`${JSON.stringify(worldContent.regions[i].towns[k].notable_people[m].items[p]["dental cat treats"].brand)} ${JSON.stringify(worldContent.regions[i].towns[k].notable_people[m].items[p]["dental cat treats"].flavor)} dental cat treats`)
                } else {
                    console.log(JSON.stringify(worldContent.regions[i].towns[k].notable_people[m].items[p]))
                }
            }
        }
        
    }
    // console.log(Object.keys(worldContent).length)
}