//  def on_forever():
//      pass
//  basic.forever(on_forever)
let x = 0
let y = 0
//  basic.pause(100)
loops.everyInterval(500, function tick() {
    
    if (input.buttonIsPressed(Button.A)) {
        if (x > 0) {
            led.unplot(x - 1, y)
        }
        
        led.plot(x, y)
        x = x + 1
    } else {
        led.unplot(x, y)
    }
    
    if (input.buttonIsPressed(Button.B)) {
        if (y > 0) {
            led.unplot(x, y - 1)
        }
        
        led.plot(x, y)
        y = y + 1
    } else {
        led.unplot(x, y)
    }
    
})
