def on_forever():
    pass
basic.forever(on_forever)
x = 0
y = 0
def tick():
    if input.button_is_pressed(Button.A):
        led.plot(x, y)
        x = x + 1
        y = y + 1

    # basic.pause(100)
    # led.unplot(0, 0)
loops.every_interval(500, tick)