async function loadWorld() {
    const res = await fetch("/world");
    const data = await res.json();

    let peopleNames = document.getElementById("people-names");
    let worldDiv = document.getElementById("worldDiv");
    worldDiv.innerHTML = "<ul></ul>";
    peopleNames.innerHTML = "";
    for (let region of data.regions){
        for (let town of region.towns){
            for (let person of town.notable_people) {
                //account for spaces in name -> causes problems for id
                if (person.name.includes(" ")){
                    let space_name = person.name
                    peopleNames.innerHTML+=`<option value="${space_name.replaceAll(" ", "-")}" id="${space_name.replaceAll(" ", "-")}option">${person.name}</option>`;
                    document.querySelector("#worldDiv ul").innerHTML += `<li id="${space_name.replaceAll(" ", "-")}" class="people">${person.name}<ul class="items"></ul></li>`
                } else{
                    peopleNames.innerHTML+=`<option value="${person.name}" id="${person.name}option">${person.name}</option>`;
                    document.querySelector("#worldDiv ul").innerHTML += `<li id="${person.name}" class="people">${person.name}<ul class="items"></ul></li>`
                }
                for (let item of person.items){
                    //make sure to find the correct id to attach the items to
                    if (person.name.includes(" ")){
                        let space_name = person.name
                        if (item.hasOwnProperty("cat food")){
                            document.querySelector(`#${space_name.replaceAll(" ", "-")} ul`).innerHTML += `<li>cat food - IAms, dry</li>`
                        } else if(item.hasOwnProperty("dental cat treats")){
                            document.querySelector(`#${space_name.replaceAll(" ", "-")} ul`).innerHTML += `<li>dental cat treats - Salmon flavored Greenies</li>`
                        } else {
                            document.querySelector(`#${space_name.replaceAll(" ", "-")} ul`).innerHTML += `<li>${item}</li>`
                        }
                    } else{
                        if (item.hasOwnProperty("cat food")){
                            document.querySelector(`#${person.name} ul`).innerHTML += `<li>cat food - IAms, dry</li>`
                        } else if(item.hasOwnProperty("dental cat treats")){
                            document.querySelector(`#${person.name} ul`).innerHTML += `<li>dental cat treats - Salmon flavored Greenies</li>`
                        } else {
                            document.querySelector(`#${person.name} ul`).innerHTML += `<li>${item}</li>`
                        }
                }

                }
            }

        }

    }
    document.querySelector(`#${data.regions[0].towns[0].notable_people[0].name}option`).selected=true;
}

//run when script loaded
loadWorld();

let item_addition = document.querySelector("#name-item");

item_addition.addEventListener("submit", async (e) => {
    e.preventDefault();

    let formData = new FormData(item_addition);
    let formDataObjectForm = Object.fromEntries(formData.entries());
    console.log(formDataObjectForm)
    const res = await fetch("/update", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formDataObjectForm)
    });

    // const update = await res.json();
    item_addition.reset();
    loadWorld();
});
