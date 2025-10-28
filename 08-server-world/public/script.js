async function loadWorld() {
    const res = await fetch("/world");
    const data = await res.json();


    let peopleNames = document.getElementById("people-names");
    let worldNames = document.getElementById("world-names");
    let worldDiv = document.getElementById("worldDiv");


    worldDiv.innerHTML = "<ul></ul>";
    peopleNames.innerHTML = "";
    for (let region of data.regions){
        //default check if there are any spaces - replace with dashes if there are
        let space_name = region.name.replaceAll(" ", "-");
        document.querySelector("#worldDiv ul").innerHTML += `<li id="${space_name}" class="people">${region.name}<ul class="towns"></ul></li>`;
        for (let town of region.towns){
            //default check if there are any spaces - replace with dashes if there are
            let town_name = town.name.replaceAll(" ", "-");

            //add the names of the towns to the dropdown
            worldNames.innerHTML+=`<option value="${town_name}" id="${town_name}option">${town.name}</option>`;
            
            //populate screen
            document.querySelector(`#${space_name} ul`).innerHTML += `<li id="${town_name}" class="people">${town.name}<ul class="people"></ul></li>`;

            for (let person of town.notable_people) {
                //default check if there are any spaces - replace with dashes if there are
                let person_name = person.name.replaceAll(" ", "-");

                //add names of the people to dropdown
                peopleNames.innerHTML+=`<option value="${person_name}" id="${person_name}option">${person.name}</option>`;
                
                //populate the screen with the names
                document.querySelector(`#${town_name.replaceAll(" ", "-")} ul`).innerHTML += `<li id="${person_name}" class="people">${person.name}</li>`;
            }
        }

    }

    //creating default that can't be chosen 
    let defaultName = document.createElement("option");
    defaultName.value=''
    defaultName.innerHTML="Select a Person";
    defaultName.disabled = true;
    defaultName.selected=true;
    //adding to the beginning of the element
    peopleNames.prepend(defaultName);

    let defaultWorld = document.createElement("option");
    defaultWorld.value=''
    defaultWorld.innerHTML="Select a Location";
    defaultWorld.disabled = true;
    defaultWorld.selected=true;
    //adding to the beginning of the element
    worldNames.prepend(defaultWorld);
}


//run when script loaded
loadWorld();

let world_move = document.querySelector("#name-world");

world_move.addEventListener("submit", async (e) => {
    e.preventDefault();

    let formData = new FormData(world_move);
    let formDataObjectForm = Object.fromEntries(formData.entries());
    console.log(formDataObjectForm)
    const res = await fetch("/update", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formDataObjectForm)
    });

    // const update = await res.json();
    world_move.reset();
    loadWorld();
});
