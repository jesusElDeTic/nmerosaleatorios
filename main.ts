let signo = 0
let numero = 0
input.onButtonPressed(Button.A, function () {
    signo = randint(1, 2)
    if (signo == 1) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    }
    numero = randint(1, 20)
    serial.writeLine("" + (numero))
    basic.showNumber(numero)
})
basic.forever(function () {
	
})
