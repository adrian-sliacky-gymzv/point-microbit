// change any of these below variables to your liking!
let x = 0 // denotes horizontal position
let y = 0 // denotes vertical position
const delay_ms = 500
const blink = false
const reversed = true

loops.everyInterval(delay_ms, function () {
    if (input.buttonIsPressed(Button.A)) {
        x = (x + 1) % 5
    }
    if (input.buttonIsPressed(Button.B)) {
        y = (y + 1) % 5
    }

    if (reversed) {
        if (blink) {
            basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        } else {
            for (let i = 0; i < 5; i++) {
                for (let j = 0; j < 5; j++) {
                    led.plot(i, j)
                }
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

if (input.buttonIsPressed(Button.AB)) { } // for initializing A+B button in makecode Simulator