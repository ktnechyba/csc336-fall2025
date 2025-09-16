var toggle=false;

function open_eyes() {
    let img = document.getElementById("black-cat");
    let button_text = document.getElementById("mood");
    let body = document.getElementById("content");
    body.classList.toggle("night");
    if (toggle==true){
        button_text.innerHTML = "Night Mode"
        img.src ="images/black-cat-closed.png";
        img.alt = "Black cat with eyes closed"
        delElement();
    } else{
        button_text.innerHTML = "Morning Mode"
        img.src ="images/black-cat-open.png";
        img.alt = "Black cat with eyes opened"
        addeyes();
        
    }
    toggle = !toggle;
}

function addeyes() {

    let parentDiv = document.getElementById("cat-header");
    var imgDiv1 = document.createElement("div");
    imgDiv1.setAttribute("class", "eye-1div");
    imgDiv1.setAttribute("id", "eye-1");
    var img1 = document.createElement("img");
    img1.setAttribute("src", "images/cat-eye.png");
    img1.setAttribute("id", "eye1");
    img1.setAttribute("alt", " ");
    img1.setAttribute("class", "eye1");
    imgDiv1.appendChild(img1);
    parentDiv.appendChild(imgDiv1);
 
    var imgDiv2 = document.createElement("div");
    imgDiv2.setAttribute("class", "eye-2div");
    imgDiv2.setAttribute("id", "eye-2");
    var img2 = document.createElement("img");
    img2.setAttribute("src", "images/cat-eye2.png");
    img2.setAttribute("id", "eye2");
    img2.setAttribute("alt", " ");
    img2.setAttribute("class", "eye2");
    imgDiv2.appendChild(img2);
    parentDiv.appendChild(imgDiv2);
    console.log("both eyes");

}


function delElement() {
    const element1 = document.getElementById("eye-1");
    const element2 = document.getElementById("eye-2");
    element1.remove();
    element2.remove();

}
