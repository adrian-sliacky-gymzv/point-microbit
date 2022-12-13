# def on_forever():
#     pass
# basic.forever(on_forever)
x = 0
y = 0
def tick():
    global x, y
    if input.button_is_pressed(Button.A):
        if x > 0:
            led.unplot(x-1, y)
        led.plot(x, y)
        x = x + 1
    else:
        led.unplot(x, y)

    if input.button_is_pressed(Button.B):
        if y > 0:
            led.unplot(x, y-1)
        led.plot(x, y)
        y = y + 1
    else:
        led.unplot(x, y)
    # basic.pause(100)

loops.every_interval(500, tick)