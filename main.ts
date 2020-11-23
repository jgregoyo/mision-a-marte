input.onButtonPressed(Button.A, function () {
    basic.showArrow(ArrowNames.West)
    COORDENADA_X += 1
    basic.showNumber(COORDENADA_X)
    basic.pause(2000)
})
function VALIDAR_COORDENADAS () {
    if (COORDENADA_X <= 4 && COORDENADA_Y <= 4) {
        COORDENADAS = game.createSprite(COORDENADA_X, COORDENADA_Y)
        return true
    } else {
        return false
    }
}
input.onButtonPressed(Button.B, function () {
    basic.showArrow(ArrowNames.East)
    COORDENADA_Y += 1
    music.ringTone(262)
    basic.showNumber(COORDENADA_Y)
    basic.pause(2000)
})
let COORDENADAS: game.LedSprite = null
let COORDENADA_Y = 0
let COORDENADA_X = 0
COORDENADA_X = 0
COORDENADA_Y = 0
let VUELOS = 0
basic.forever(function () {
    if (!(VALIDAR_COORDENADAS())) {
        basic.showIcon(IconNames.No)
    }
})
