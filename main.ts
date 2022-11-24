radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 5) {
        basic.showString("CLAP")
    } else {
        basic.showString("")
    }
})
radio.setGroup(78)
let strip = neopixel.create(DigitalPin.P13, 24, NeoPixelMode.RGB)
let light_s = 0
strip.setBrightness(40)
basic.forever(function () {
    light_s = pins.analogReadPin(AnalogPin.P3)
    serial.writeNumber(light_s)
    serial.writeLine("")
    if (light_s > 999) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        strip.show()
        radio.sendNumber(5)
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        strip.show()
    }
})
