input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showNumber(최저온도)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    basic.showNumber(현재온도)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showNumber(최고온도)
})
let 최고온도 = 0
let 최저온도 = 0
let 현재온도 = 0
현재온도 = input.temperature()
최저온도 = 현재온도
최고온도 = 현재온도
basic.forever(function () {
    현재온도 = input.temperature()
    if (최저온도 > 현재온도) {
        최저온도 = 현재온도
    }
    if (최고온도 < 현재온도) {
        최고온도 = 현재온도
    }
    basic.showString(".")
    basic.pause(500)
    basic.clearScreen()
    basic.pause(500)
})
