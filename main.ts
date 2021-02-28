input.onButtonPressed(Button.A, function () {
    basic.showString("" + (input.temperature()))
    basic.pause(500)
    if (input.temperature() >= 39) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    }
    if (input.temperature() == 38) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
    }
    if (input.temperature() <= 37) {
        basic.showLeds(`
            . . . # .
            . . . # .
            . # # # .
            . # # # .
            . # # # .
            `)
    }
    basic.pause(1000)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # # #
        . # . . #
        # # . # #
        . # . . #
        # # . . #
        `)
})
