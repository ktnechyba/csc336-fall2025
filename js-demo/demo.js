let x=-10;

// console.log(x)

// let y;
// if (x>0){
//     y=x;
// } else{
//     y=0;
// }
// console.log(y)

// let y = (x>0) ? y=x : y=0;

//array descructuring
let fruits = () =>["apple", "banana", "coconut"]; //function that returns fruits

let [fruit1, fruit2, fruit3] = fruits(); //take the values from the array and putting them into a variable

console.log(fruit1);

//object destructuring
let person = {
    name:"mike",
    job:"professor"
}

let {name, job} = person;

console.log(job);

//map to iterate through an array
let numbers = [14,45352,56,325,-2454];

// //a way to loop - another way is with the iterator variable
// for(let number of numbers){
//     console.log(number);
// }

numbers.forEach((element, index) => console.log(element)); //an array function -> doesn't generate a new array


let newArray = numbers.map((element)=> element+10); //add 10 to each element and return a new array

// npm create vite@latest to make a react web
//all react component returns a single html component

//npm run dev = run the react

//dist folder is the live project you can upload to run online -> need to npm run build, add "/" to the index links

///npm install react-router-dom