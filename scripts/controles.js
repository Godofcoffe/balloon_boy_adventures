const bb = document.getElementById("personagem")
let posx = 600
let posy = 505
let vel = 10

function keyPressed(evt){
    evt = evt || window.event;
    let key = evt.keyCode || evt.which;
    return String.fromCharCode(key); 
}

function pseudo_sleep() {
    return null
}

document.onkeypress = function(evt) {
    let tecla = keyPressed(evt);
    bb.style.animation = ""
    if (tecla == "d") {
        posx += vel
        bb.style.transform = "rotateY(0)"
        bb.style.marginLeft = `${posx}px`
    }
    if (tecla == "a") {
        posx -= vel
        bb.style.marginLeft = `${posx}px`
        bb.style.transform = "rotateY(180deg)"
    }
    if (tecla == "w") {
        bb.style.animation = "salto 2s"
    }
}
