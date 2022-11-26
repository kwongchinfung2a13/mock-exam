let number_counter = 0
input.onButtonPressed(Button.A, function () {
    if (input.temperature() < 25) {
        basic.showString("turn off air conditioner ")
    }
})
input.onButtonPressed(Button.B, function () {
    number_counter = 19
    while (number_counter >= 0) {
        basic.showNumber(number_counter)
        basic.pause(100)
        number_counter += -2
    }
})
basic.forever(function () {
	
})
