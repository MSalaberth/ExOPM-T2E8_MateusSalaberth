let som
let tocarSom = false
let amp

function preload() {
    som = loadSound("bach.mp3")
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    amp = new p5.Amplitude()
}

function draw() {
    background(255)
    let cor = map(mouseX, 0, windowWidth, 255, 0)

    let level = amp.getLevel()

    level = map(level, 0, 1, 10, 1000)

    rectMode(CENTER)

    noStroke()
    fill(200, 200, 255)
    rect(width / 2, height / 2, level, level, 20)


    fill(150, 150, 255)
    rect(width / 2, height / 2, level, 30, 100)

    fill(cor)
    rect(width / 2, height / 2, level, 10, 100)
}

function mousePressed() {
    if (tocarSom == false) {
        som.play()
        tocarSom = true

    } else if ((tocarSom == true)) {
        som.pause()
        tocarSom = false

    }
}

function keyPressed() {

}