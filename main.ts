// change any of these variables below to your liking!
let x = 0 // starting horizontal position
let y = 0 // starting vertical position
const delayMs = 500
const buttonsSwapped = false

// how to plot leds
const blink = false
const reversed = false

// ############################################

let button1 = Button.A
let button2 = Button.B

if (buttonsSwapped) {
    button1 = Button.B
    button2 = Button.A
}

loops.everyInterval(delayMs, function () {
    if (input.buttonIsPressed(button1)) {
        x = (x + 1) % 5
    }
    if (input.buttonIsPressed(button2)) {
        y = (y + 1) % 5
    }

    if (blink) {
        if (reversed) {
            basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
            led.unplot(x, y)
        } else {
            basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
            led.plot(x, y)
        }
    }
    if (reversed) {
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                led.plot(i, j)
            }
        }

        led.unplot(x, y)
    } else {
        basic.clearScreen()
        led.plot(x, y)
    }
    console.log({
        x,
        y
    })
})

if (input.buttonIsPressed(Button.AB)) { } // for initializing A + B button in makecode Simulator