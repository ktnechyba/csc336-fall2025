let call = document.querySelector("#callback-demo-button");

function clickEventHappened(){
    console.log("clicked")
}


call.addEventListener("click",() => {
    console.log("ah")
});

function doSomething(num){
    let sum =0;
    for (let i=0; i<num; i++) {
        sum = i*num/4;
    }
    return sum
}

let result = doSomething(100)
console.log(result)

/*
API = application programming interface
have endpoints -> look like urls
*/

// fetch api https://dog.ceo/api/breeds/image/random <-endpoint


//fetch says done when recieves respones -> is a promise
// let img = fetch("https://dog.ceo/api/breeds/image/random");
// img    
//     .then((response)=> {return response.json()})
//     .then((dogdata)=>{console.log(dogdata)})
//     .catch(()=>{console.log("Something went wrong")})
// doggy.setAttribute("class", "images")
// for (let i= 0; i<12; i++){
//     let img = fetch("https://dog.ceo/api/breeds/image/random");
//     img    
//     .then((response)=> {return response.json()})
//     .then((dogdata)=>{
//         let images = document.createElement("img")
//         images.src = dogdata.message
//         document.body.appendChild(images)
//     })
//     .catch(()=>{console.log("Something went wrong")})
//     }


//only call await from functions marked as asyng
// async function getAndDisplay(){
//     let img = await fetch("https://dog.ceo/api/breeds/image/random");
//     let imgdata = await img.json();
//     let images = document.createElement("img")
//     images.width = 200;
//     images.src = imgdata.message
//     document.body.appendChild(images)
// }

// getAndDisplay();

async function catImage(){
    let cat = await fetch("https://cataas.com/cat/gif/says/Hello?filter=mono&fontColor=orange&fontSize=20&type=square")
    let catData = await cat.json()
    console.log(catData)
}
catImage()
async function catFact(){
    let fact = await fetch("https://meowfacts.herokuapp.com/")
    let factData = await fact.json();
    let title = document.createElement("h1");
    title.innerHTML = factData.data[0]
    console.log(factData.data[0])
    document.querySelector("#text").appendChild(title);

}

catFact();