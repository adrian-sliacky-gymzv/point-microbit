basic.forever(function on_forever() {
    
})
let x = 0
let y = 0
//  basic.pause(100)
//  led.unplot(0, 0)
loops.everyInterval(500, function tick() {
    let x: number;
    let y: number;
    if (input.buttonIsPressed(Button.A)) {
        led.plot(x, y)
        x = x + 1
        y = y + 1
    }
    
})
