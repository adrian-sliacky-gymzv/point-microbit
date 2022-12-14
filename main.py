x = 0
y = 0

def onEvery_interval():
    global x, y
    if input.button_is_pressed(Button.A):
        if x >= 5:
            x = 0
        basic.clear_screen()
        led.plot(x, y)
        x += 1
    if input.button_is_pressed(Button.B):
        if y >= 5:
            y = 0
        basic.clear_screen()
        led.plot(x, y)
        y += 1
    print(x)
    print(y)
loops.every_interval(500, onEvery_interval)
