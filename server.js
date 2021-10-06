const N_players = document.getElementsByTagName("img").length
let player = document.getElementsByTagName("img")[N_players - 1]
let posx = 501
let posy = 300
const vel = 10
const limitx = window.innerHeight
const limity = window.innerWidth

window.onload = () => {
    player.style.height = "100px"
    player.style.width = "100px"
    player.style.marginTop = `${posx}px`
    player.style.marginLeft = `${posy}px`
}

function draw() {
    // Drawing code goes here
    requestAnimationFrame(draw);
}

function salto(){
    // function cima(){
    //     posx -= 30
    //     player.style.marginTop = `${posx}px`
    // }

    // function baixo(){
    //     posx += 30
    //     player.style.marginTop = `${posx}px`
    // }

    // for (let c = 0; c <= 5; c++){
    //     cima()
    // }
    // for (let c = 0; c <= 5; c++){
    //     baixo()
    // }
}

function direita(){
    if (posy < limity - 105){
        player.style.transform = "rotateY(0)"
        posy += vel
        player.style.marginLeft = `${posy}px`
    }
}

function esquerda(){
    if (posy > 0){
        player.style.transform = "rotateY(180deg)"
        posy -= vel
        player.style.marginLeft = `${posy}px`
    }
}

moves = {
    "ArrowLeft": esquerda,
    "ArrowRight": direita,
    "ArrowUp": salto,
    "a": esquerda,
    "w": salto,
    "d": direita
}

document.onkeydown = function(evt) {
    let tecla = evt.key
    moves[tecla]()
}