input.onButtonPressed(Button.A, function () {
    if (time == 0) {
        basic.showNumber(time)
    } else {
        time += -1
        basic.showNumber(time)
    }
})
input.onGesture(Gesture.Shake, function () {
    if (time == 0) {
        basic.showIcon(IconNames.Happy)
        basic.showNumber(time)
    } else {
        basic.showIcon(IconNames.Sad)
        basic.showNumber(time)
    }
})
input.onButtonPressed(Button.AB, function () {
    while (true) {
        basic.pause(1000)
        time += -1
    }
})
input.onButtonPressed(Button.B, function () {
    if (time < 9) {
        basic.showNumber(time)
    } else {
        basic.showNumber(time)
    }
    time += 1
    basic.showNumber(time)
})
let time = 0
time = 0
basic.forever(function () {
    basic.showNumber(time)
})
