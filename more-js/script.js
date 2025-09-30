console.log("YAHOOO")

let button = document.querySelector("#myButton");
// button.addEventListener("click", activate);
// function activate(){ //the scope is the button?
//     console.log("HEHE")
// }
// button.addEventListener("click", function(){
//     console.log("HEHE")
// });

//scope is the window/global
button.addEventListener("click", (e)=>{
    console.log("ARROW function :)))")
});

let theButton = document.querySelector("#aButton");
theButton.addEventListener("click", speak);
function speak(){
    let heading = document.createElement("h1");
    heading.setAttribute("class", "heading");
    let container = document.querySelector("div");
    container.appendChild(heading);
    heading.innerHTML = "Take me hooooooome, country rooooaaaddd \nTo the Place...I belooooonnnng\n West Virginia, Mountain Mama\n Take me hoooome County Rooooaaadd";
}

class Person{
    constructor(name){
        this.name= name;
    }

    sayHello(times){
        for (let i = 0; i<times; i++){
            console.log("hello, my name is "+ this.name);
        }
        
    }
}

//instantiate an object
let mike = new Person("mike");

mike.sayHello(20);

///local storage allows us to store a string as a key and the values need to be strings as well
// localStorage.setItem("user", "mike");

// console.log(localStorage.getItem("user"));

/*
JavaScript Object Notation = JSON
an object that lives in the broswer that you can pass anything into

client to server is a string comunication channel

*/

let stringOfMike = JSON.stringify(mike);
console.log(stringOfMike);

// takes string version and changes it back to whaterver it was prior
console.log(JSON.parse(stringOfMike));

/*
Canvas = grid of pxels you can draw graphics on

*/

const canvas = document.querySelector("canvas");
console.log(canvas);
const ctx = canvas.getContext("2d");

//draw filled rectangle
ctx.fillStyle = "thistle";
ctx.fillRect(100,100,100,75);

//hsb = hue saturation brightness

//p5 is a graphicd snf interaction library -> only want stuff with CDN's now = Content Delivery Network