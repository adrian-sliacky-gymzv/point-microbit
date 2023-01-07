// ############################################

// change any of these constants below to your liking!
const useGyro = true
const ledOverflow = false

const startX = 0 // starting horizontal position
const startY = 0 // starting vertical position

const delay = 200 // delay in milliseconds
const buttonsSwapped = false
const controlsSwapped = false

// how to plot leds
const blink = false
const reversed = false

// ############################################

let x = startX
let y = startY

let button1 = Button.A
let button2 = Button.B

if (buttonsSwapped) {
    button1 = Button.B
    button2 = Button.A
}

input.onButtonPressed(Button.AB, () => {
    if (useGyro) {
        basic.clearScreen()
        x = startX
        y = startY
    }
})

let increment = 1
if (controlsSwapped) {
    increment = -1
}

const mod = (a: number, b: number) => ledOverflow ? ((a % b) + b) % b : Math.max(Math.min(a, 4), 0)


loops.everyInterval(delay, () => {
    if (useGyro) {
        if (input.isGesture(Gesture.TiltLeft)) {
            x = mod(x - increment, 5)
        }
        if (input.isGesture(Gesture.TiltRight)) {
            x = mod(x + increment, 5)
        }
        if (input.isGesture(Gesture.LogoUp)) {
            y = mod(y + increment, 5)
        }
        if (input.isGesture(Gesture.LogoDown)) {
            y = mod(y - increment, 5)
        }
    } else {
        if (input.buttonIsPressed(button1)) {
            x = mod(x + increment, 5)
        }
        if (input.buttonIsPressed(button2)) {
            y = mod(y + increment, 5)
        }
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
})

if (input.buttonIsPressed(Button.AB)) { } // for initializing A + B button in makecode Simulator