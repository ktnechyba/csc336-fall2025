let cats_owned = [
    {
        name: "Katherine",
        have_cats: "yes",
        num_cats: 1,
        allergic: true

    },
    {
        name: "Megan",
        have_cats: "no",
        num_cats: 0,
        allergic: false
    },
    {
        name:"Rin",
        have_cats: "no",
        num_cats: 0,
        allergic: true
    },
    {
        name: "Denise",
        have_cats: "yes",
        num_cats: 3,
        allergic: false
    }
];

function populateFormDisplay(){
    let has_results= document.querySelector("#has");
    let hasNot_results = document.querySelector("#has-not");
    
    hasNot_results.innerHTML="";
    has_results.innerHTML="";

    for (let person of cats_owned) {
        if (person.have_cats=="yes"){
            let personHTML = createPersonCard(person, "cat-owner");
            has_results.innerHTML +=personHTML;
            
        } else{
            let personHTML = createPersonCard(person, "none-owned");
            hasNot_results.innerHTML +=personHTML;
        }
    }
};

function createPersonCard(person, className) {
    return `
        <div class="${className}">
            <h3>${person.name}</h3>
            <div class="">
                <div>Has Cats: ${person.have_cats}</div>
                <div>Number of Cats Owned: ${person.num_cats}</div>
                <div>Allergic to Cats: ${person.allergic}</div>
            </div>
        </div>
    `;
};

let addPersonForm = document.querySelector("#cat-form");
addPersonForm.addEventListener("submit", verify);

populateFormDisplay();

function verify(e) {
    e.preventDefault();

    valid=true;
    // name validation
    let nameInput = document.querySelector("#enter-name").value;

    //if the name no input or less than 2 characters, error
    if(nameInput===""||nameInput.length<2){ 
        document.querySelector("#name-error").innerText = "Please enter a valid name.";
        valid = false;
    } else {
        document.querySelector("#name-error").innerText = "";
    }

    //have cats validation
    let haveInput = document.querySelectorAll("input[name='have-cats']");
    let have_check = false;
    for (items of haveInput){
        if (items.checked){
            have_check = true;
            break;
        }
    }
    if (have_check==false) {
        document.querySelector("#have-cats-error").innerText = "Please select a radio button";
        valid = false;
    } else{
        document.querySelector("#have-cats-error").innerText = "";
    }

    // number validation
    let numInputVal = document.querySelector("#number-cats").value;
    if (numInputVal<0){
        document.querySelector("#num-cats-error").innerText = "You cannot have negative cats.";
        valid = false;
    } else {
        document.querySelector("#num-cats-error").innerText = "";
    }

    // allergy validation
    let allergyInput = document.querySelectorAll("input[name='allergy']");
    let allergy_check = false;
    for (items of allergyInput){
        if (items.checked){
            allergy_check = true;
            break;
        }
    }
    if (allergy_check==false) {
        document.querySelector("#have-allergies-error").innerText = "Please select a radio button";
        valid = false;
    } else {
        document.querySelector("#have-allergies-error").innerText = "";
    }

    if (valid) {
        addNewPerson();
    }
};

//only allow them to input cats if they have some - set to zero if don't own cats
let haveCats = document.querySelectorAll("input[name='have-cats']");
haveCats.forEach(function(radio) {
    radio.addEventListener("change", function(){
    let numInput = document.querySelector("#number-cats");
    if (this.value == "yes"){
        numInput.disabled = false;
    } else{
        numInput.disabled = true;
        numInput.value = 0;
    }
    })
});


function addNewPerson() {
    let nameInput = document.querySelector("#enter-name").value;
    let haveInput = document.querySelector("input[name='have-cats']:checked").value;
    let numInput = document.querySelector("#number-cats").value;
    let allergyInput = document.querySelector("input[name='allergy']:checked").value;

    let newPerson = {
        name: nameInput,
        have_cats: haveInput,
        num_cats: numInput,
        allergic: allergyInput
    }
    cats_owned.push(newPerson);
    let form = document.querySelector("form");
    form.reset();
    populateFormDisplay();

};