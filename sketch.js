let som
let tocarSom = false
let amp
let linhaRetangulos
let tamanho = 40

function preload() {
    som = loadSound("bach.mp3")
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    noStroke()
    linhaRetangulos = width / tamanho
    amp = new p5.Amplitude()
}

function draw() {
    background(0)

    let level = amp.getLevel()

    level = map(level, 0, 1, 10, 1000)

    for (i = 0; i < linhaRetangulos; i++) {
        for (j = 0; j < height; j += tamanho) {
            fill(random(200, 255), random(200, 255), random(200, 255))
            rect(0 + i * tamanho, 0 + j, level, level)
        }
    }

    rectMode(CENTER)

    noStroke()
    fill(200, 200, 255)
    rect(width / 2, height / 2, level, level, 20)


    fill(150, 150, 255)
    rect(width / 2, height / 2, level, 30, 100)

    fill(255)
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