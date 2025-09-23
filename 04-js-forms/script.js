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

//get data on how many do and don't have cats
let numHas = 0;
let numHasnt = 0;

function populateFormDisplay(){
    let has_results= document.querySelector("#has");
    let hasNot_results = document.querySelector("#has-not");
    
    hasNot_results.innerHTML="";
    has_results.innerHTML="";

    //reset numbers so we don't add the same people again
    numHas = 0;
    numHasnt = 0;
    for (let person of cats_owned) {
        if (person.have_cats=="yes"){
            let personHTML = createPersonCard(person, "cat-owner");
            has_results.innerHTML +=personHTML;
            numHas+=1;
            
        } else{
            let personHTML = createPersonCard(person, "none-owned");
            hasNot_results.innerHTML +=personHTML;
            numHasnt+=1
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

//get x and y values for chart
const xValues = ["Has Cats", "Doesn't Have Cats"];
const yValues = [numHas, numHasnt];

//colors of the pi chart
const barColors = ['rgb(189, 78, 115)',
    'rgb(95, 180, 191)'];

const ctx = document.getElementById('has-cats-chart');

let pieChart = new Chart(ctx, {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    plugins: {
      legend: {display:true},
      title: {
        display: true,
        text: "How Many People Own Cats?",
        font: {size:16}
      }
    }
  }
});

// Dynamically update the chart
setInterval(function () {

    // array with updated values
    let updatedData = [numHas,numHasnt];

    // Update the chart object
    pieChart.data.datasets[0].data = updatedData;
    
    // Update the chart
    pieChart.update();
}, 200);