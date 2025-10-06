// async function catImage(){
//     let cat = await fetch("https://cataas.com/cat/says/hello")
//     // let catData = await cat.json()
//     console.log(cat['url'])
//     let pic = document.createElement("img");
//     pic.src = cat['url']
//     document.querySelector("#text").appendChild(pic);
// }
// catImage()

//cat images
// let catimg = document.querySelectorAll("input[name='imgs']");
// catimg.forEach(function(radio) {
//     radio.addEventListener("change", function(){
//     let numInput = document.querySelector("#num-imgs");
//     if (this.value == "yes"){
//         numInput.style.display = "flex";
//     } else {
//         numInput.style.display = "none";
//     }
//     })
// });

//verify form
let formVerify = document.querySelector("form");
formVerify.addEventListener("submit", verify);
jokesTogetherDisplay = false;
jokesNum = false;
factsNum = false;
factsTogetherDisplay = false;
function verify(e) {
    e.preventDefault();
    let submit = true;

    let cat_image = Number(document.querySelector("#num-img").value);
    console.log(cat_image)
    if (cat_image<=0 || !cat_image){
        document.querySelector("#num-imgs-error").innerText = "You must have at least 1 image";
        submit = false;
    } else {
        document.querySelector("#num-imgs-error").innerText = "";
    }


    let cat_fact = document.querySelectorAll('input[name="fact"]');
    let fact_checked = false;
    for (items of cat_fact){
        if (items.checked){
            fact_checked = true;
            break;
        }
    }
    if (fact_checked==false) {
        document.querySelector("#want-facts-error").innerText = "Please select a radio button";
        submit = false;
    } else{
        document.querySelector("#want-facts-error").innerText = "";
    }

    if (factsNum==true){
        let fact_count = Number(document.querySelector("#num-fact").value);
        if (fact_count<=0 ||!fact_count){
            document.querySelector("#num-facts-error").innerText = "You must have at least 1 fact";
            submit = false;
        } else {
            document.querySelector("#num-facts-error").innerText = "";
        }
    }
    if (factsTogetherDisplay==true){
        let fact_img = document.querySelectorAll('input[name="fact-img"]');
        let factImg_checked = false;
        for (items of fact_img){
            if (items.checked){
                factImg_checked = true;
                break;
            }
        }
        if (factImg_checked==false) {
            document.querySelector("#want-facts-img-error").innerText = "Please select a radio button";
            submit = false;
        } else{
            document.querySelector("#want-facts-img-error").innerText = "";
        }
    }


    if (jokesTogetherDisplay==true){
        let joke_img = document.querySelectorAll('input[name="joke-img"]');
        let jokeImg_checked = false;
        for (items of joke_img){
            if (items.checked){
                jokeImg_checked = true;
                break;
            }
        }
        if (jokeImg_checked==false) {
            document.querySelector("#want-jokes-img-error").innerText = "Please select a radio button";
            submit = false;
        } else{
            document.querySelector("#want-jokes-img-error").innerText = "";
        }
    }
    if (jokesNum==true){
        let jokes_count = Number(document.querySelector("#num-joke").value);
        if (jokes_count<=0 ||!jokes_count){
            document.querySelector("#num-jokes-error").innerText = "You must have at least 1 joke";
            submit = false;
        } else {
            document.querySelector("#num-jokes-error").innerText = "";
        }
    }
    if (submit){
        console.log("done")
        
        generate();
        document.querySelector("#cat-fact-img").style.display = "none";
        document.querySelector("#have-a-joke").style.display = "none";
        document.querySelector("#cat-joke-img").style.display = "none";
        document.querySelector("#num-jokes").style.display = "none";
        document.querySelector("#num-facts").style.display = "none";

        // Reset tracking flags
        jokesTogetherDisplay = false;
        jokesNum = false;
        factsNum = false;
        factsTogetherDisplay = false;
        formVerify.reset();
    }

}

//cat facts - yes ask if want a fact, no = give them a joke
let catfact = document.querySelectorAll("input[name='fact']");
catfact.forEach((radio) =>{
    radio.addEventListener("change", function(){
    let facttogether = document.querySelector("#cat-fact-img")
    let jokes = document.querySelector("#have-a-joke");
    let together = document.querySelector("#cat-joke-img");
    if (this.value == "yes"){
        facttogether.style.display = "flex";
        jokes.style.display = "none";
        together.style.display = "none";
        document.querySelector("#num-jokes").style.display = "none";
        jokesTogetherDisplay = false;
        jokesNum = false;
        factsNum = false;
        factsTogetherDisplay = true;

    } else{
        facttogether.style.display = "none";
        together.style.display = "flex";
        jokes.style.display = "flex";
        jokes.innerHTML = "Have a joke instead!"
        jokesTogetherDisplay = true;
        jokesNum = false;
        factsNum = false;
        factsTogetherDisplay = false;
    }
    })
});

//cat fact images together - no= ask how many facts, yes = nothing
let facts = document.querySelectorAll("input[name='fact-img']");
facts.forEach((radio) =>{
    radio.addEventListener("change", function(){
    let numInput = document.querySelector("#num-facts");
    if (this.value == "yes"){
        numInput.style.display = "none";
        jokesTogetherDisplay = false;
        jokesNum = false;
        factsNum = false;
        factsTogetherDisplay = true;
    } else{
        numInput.style.display = "flex";
        jokesTogetherDisplay = false;
        jokesNum = false;
        factsNum = true;
        factsTogetherDisplay = true;
    }
    })
});


// joke and cat images together - no = ask how many jokes, yes = nothing
let jokesimg = document.querySelectorAll("input[name='joke-img']");
jokesimg.forEach((radio) =>{
    radio.addEventListener("change", function(){
    let numInput = document.querySelector("#num-jokes");
    if (this.value == "yes"){
        numInput.style.display = "none";
        jokesTogetherDisplay = true;
        jokesNum = false;
        factsNum = false;
        factsTogetherDisplay = false;
    } else{
        numInput.style.display = "flex";
        document.querySelector("#num-facts").style.display = "none"
        jokesTogetherDisplay = true;
        jokesNum = true;
        factsNum = false;
        factsTogetherDisplay = false;
    }
    })
});

async function catImageText(words){
    let word_count = words.trim().split(" ");
    if (word_count.length>15){
        let middle = Math.floor(word_count.length / 2);
        let first = word_count.slice(0, middle).join(" ");
        let second = word_count.slice(middle).join(" ");
        let word = `${first}\n${second}`;
        let message = encodeURIComponent(word);
        let link = `https://cataas.com/cat/says/${message}?fontSize=12`
        let cat = await fetch(link)
        // let catData = await cat.json()
        console.log(cat['url'])
        let pic = document.createElement("img");
        pic.src = link
        return pic;
    } else{
        let message = encodeURIComponent(words);
        let link = `https://cataas.com/cat/says/${message}?fontSize=12`
        let cat = await fetch(link)
        // let catData = await cat.json()
        console.log(cat['url'])
        let pic = document.createElement("img");
        pic.src = link
        return pic;
    }

}

function aloneCatImg(num){
    let cat = 'https://cataas.com/cat?width=500'
    let pic = document.createElement("img");
    let container = document.createElement("div");
    container.className = "cats-card"
    document.querySelector(".cat-images").appendChild(container)
    pic.className = 'images'
    pic.src = cat+"&timestamp=" + (Date.now()+num); //trying to not have the same image again and again
    container.appendChild(pic);
    return;
}

async function catFact(){
    let fact = await fetch("https://meowfacts.herokuapp.com/")
    let factData = await fact.json();
    let title = document.createElement("h2");
    let container = document.createElement("div")
    container.className = "fact-card"
    document.querySelector("#facts").appendChild(container);
    title.innerHTML = factData.data[0]
    // console.log(factData.data[0])
    container.appendChild(title);
    return;
}
async function catFactImg(){
    let fact = await fetch("https://meowfacts.herokuapp.com/")
    let factData = await fact.json();
    let words  = factData.data[0]
    let cfacts = await catImageText(words);
    let text = document.createElement("h2")
    text.innerHTML = words
    let container = document.createElement("div")
    container.className = "fact-cat-card"
    document.querySelector("#facts-images").appendChild(container);
    container.appendChild(cfacts)
    container.appendChild(text)

    return;
}

async function joke(){
    let joke = await fetch("https://official-joke-api.appspot.com/jokes/random")
    let jokeData = await joke.json();
    let title = document.createElement("h2");
    let punch = document.createElement("h2");
    punch.className = "hide";
    let container = document.createElement("div")
    container.className = "joke-card"
    document.querySelector("#jokes").appendChild(container);
    title.innerHTML = jokeData.setup;
    punch.innerHTML = jokeData.punchline;
    container.appendChild(title);
    container.appendChild(punch);
    return;
}


async function jokeImg(){
    let joke = await fetch("https://official-joke-api.appspot.com/jokes/random")
    let jokeData = await joke.json();
    let title = jokeData.setup;
    let punch = jokeData.punchline;

    let titleText = document.createElement("h2");
    titleText.innerHTML = title
    let punchText = document.createElement("h2");
    punchText.innerHTML = punch

    let question = await catImageText(title);
    let punchline = await catImageText(punch);
    let hide = document.createElement("div")
    hide.className = "hide";
    let container = document.createElement("div")
    container.className = "joke-img-card"
    document.querySelector("#jokes-images").appendChild(container);
    container.appendChild(question);
    container.appendChild(titleText)
    container.appendChild(hide)
    hide.appendChild(punchline);
    hide.appendChild(punchText)
    return;
}


function generate(){
    let num_cat_photos = Number(document.querySelector("#num-img").value);
    let checked_fact_vaue = document.querySelector("input[name='fact']:checked").value;
    //check yes or no for like cat fact: if no -> yes w/ image use cats, no w/image get num jokes
    // if yes -> yes w/image use cats, no w/images get num facts
    if (checked_fact_vaue == "yes"){
        let checked_factCat_img = document.querySelector("input[name='fact-img']:checked").value;
        if (checked_factCat_img == "yes"){
            for (let i=0; i<num_cat_photos; i++){
                console.log("facts and images")
                catFactImg();
                
            }
        } else {
            let num_facts = Number(document.querySelector("#num-fact").value);
            for (let i=0; i<num_facts; i++){
                console.log("facts")
                catFact();
                
            }
            for (let i=0; i<num_cat_photos; i++){
                console.log("fact images")
                aloneCatImg(i);
            }
        }
    } else {
        let checked_joke_val = document.querySelector("input[name='joke-img']:checked").value;
        if (checked_joke_val == "yes"){
            for (let i=0; i<num_cat_photos; i++){
                console.log("jokes and images")
                jokeImg();
                
            }
        } else {
            let num_joke = Number(document.querySelector("#num-joke").value);
            for (let i=0; i<num_joke; i++){
                console.log("jokes")
                joke();

                
            }
            for (let i=0; i<num_cat_photos; i++){
                console.log("j images")
                aloneCatImg(i);
            }
        }
    }

}
