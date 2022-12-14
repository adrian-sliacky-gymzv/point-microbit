let x = 0
let y = 0

loops.everyInterval(500, function onEvery_interval() {

    if (input.buttonIsPressed(Button.A)) {
        x = (x + 1) % 5
    }

    if (input.buttonIsPressed(Button.B)) {
        y = (y + 1) % 5
    }
    basic.clearScreen()
    led.plot(x, y)
    
    console.log(x)
    console.log(y)
})