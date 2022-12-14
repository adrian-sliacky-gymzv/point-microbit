let x = 0
let y = 0
let delay_ms = 500
let blink = false
loops.everyInterval(delay_ms, function () {
    if (input.buttonIsPressed(Button.A)) {
        x = (x + 1) % 5
    }
    if (input.buttonIsPressed(Button.B)) {
        y = (y + 1) % 5
    }

    if (blink) {
        basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
        led.unplot(x, y)
    }
    else {
        basic.clearScreen()
        led.plot(x, y)
    }
        
    console.log({x, y})
})

if (input.buttonIsPressed(Button.AB)) {} // for initializing A+B button in makecode Simulator
