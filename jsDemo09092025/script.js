function toCoral(){
    const element = document.getElementById("color-change");
    element.classList.toggle('og-color');
    // element.classList.add('color-coral');
}
let demoboxes = document.getElementsByClassName('demo-box');
console.log(demoboxes.length);

let clickCount = 0;
function huh(){
    let click = document.getElementById("color-change");
    console.log("HUUUUUUHHH?")
    clickCount++;
    click.innerText = clickCount;
    
}