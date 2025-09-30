
let cat_buttons = document.querySelectorAll('input[name="cats"]');
cat_buttons.forEach(function(but) {
    but.addEventListener("click", function(){
        document.querySelectorAll('.card img').forEach(img => {
            img.style.border = 'double black 12px';
        });
        if (this.checked == true){
            let label = this.closest('.card');
            if (label) {
                let img = label.querySelector('img');
                if (img) {
                    img.style.border = 'double #F8C37F 12px';
                }
            }
        }
    })
});

let cat_vote = document.querySelector("form");
cat_vote.addEventListener("submit", success);

let voted=false;

const defaults = {
    spread: 500,
    ticks: 100, //how long confetti lives
    gravity:.2, //gentle fall
    decay:.94, //slow down
    startVelocity: 30,
    shapes:["image", "heart"],
    shapeOptions: {
        image:[{
            src: "images/confetti-1.png",
            width: 40,
            height: 40
        },
        {
            src:"images/confetti-2.png",
            width: 40,
            height: 40
        },
        {
            src:"images/confetti-3.png",
            width: 40,
            height: 40
        }],
    }
}

function success(e){
    e.preventDefault();
    const selectedRadio = document.querySelector('input[name="cats"]:checked');
    if (voted){
        alreadyVoted();
        return;
    }

    if (!selectedRadio) {
        //show error 
        alert("Need to select a cat to vote!")
        return;
    } else {
        console.log("why")
        voted= true;
        let label = selectedRadio.closest('.card');
        if (label) {
            let img = label.querySelector('img');
            if (img) {
                img.style.border = 'double black 12px';
            }
        }

        confetti({
            ...defaults,
            particleCount:100, //number of confetti pieces
            scalar:4, //scale of images
            origin: {y: 0}
          });
    
    }
}

function alreadyVoted(){
    Swal.fire({
        title: "Congratulations!",
        text: "You've already voted for a cat!",
        confirmButtonText: 'OK'
    })
}