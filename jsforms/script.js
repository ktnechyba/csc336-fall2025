// let person = {
//     name: "mike",
//     favoritePetisCat: true,
//     hello: function(n){
//         for (let i =onabort; i<n; i++){
//             console.log("Cat");
//         }
//     }
// }

// person.hello(5);
// console.log(person.favoritePetisCat.name);

// person.favoritePet = "Misty";
// console.log(person.favoritePet.name);

// function rollDice() {
//     let randNum = Math.floor(Math.random()*6+1);
//     console.log(randNum);
//     let roll_div = document.querySelector("#dice-roll");
//     // roll_div.innerHTML += "<div class='dice-roll'>" + randNum + "</div>";
//     let new_div = document.createElement("div");
//     new_div.textContent = randNum;

//     new_div.classList = "dice-roll";

//     roll_div.append(new_div);
// }

let animals = [
    {
        type:"cat",
        strength: 10,
        charisma: 16,
    },
    {
        type:"dog",
        strength: 14,
        charisma: 9,
    },
    {
        type:"rabbit",
        strength: 7,
        charisma: 12,
    },
    {
        type:"seahorse",
        strength: 2,
        charisma: 20,
    }
];

// document.addEventListener("DOMContentLoaded", populateAnimalInfo); if don't defer

function populateAnimalInfo(){
    let animalInfoDiv = document.querySelector("#all-animal-info");
    animalInfoDiv.innerHTML = "";
    // for (let i = 0; i<aniamls.length; i++){
    for (let animal of animals){ //of for arrays, in for objects
        // let animal = aniamls[i]

        let animalHTML = createAnimalDiv(animal);
        animalInfoDiv.innerHTML+=animalHTML;
    }
}

function createAnimalDiv(animal) {
    return `
        <div>
            <h1>${animal.type}</h1>
            <div class="stats">
                strength: ${animal.strength}
            </div>
            <div class="stats">
                charisma: ${animal.charisma}
            </div>
        </div>
    `;

}

let addAnimalForm = document.querySelector("#add-animal-form");
addAnimalForm.addEventListener("submit", addNewAnimal);

function addNewAnimal(event){
    event.preventDefault();
    console.log("Added new animal");
    let typeInput = document.querySelector("#animal-type-field").value;
    let strenghtInput = document.querySelector("#animal-strength-field").value;
    let charismaInput = document.querySelector("#animal-charisma-field").value;

    let newAnimal = {
        type: typeInput,
        strength: strenghtInput,
        charisma: charismaInput
    }
    animals.push(newAnimal);
    populateAnimalInfo();
}