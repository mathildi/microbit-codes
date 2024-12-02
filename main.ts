let light2 = 0
let moisture = 0
let temperature = 0
OLED.init(128, 64)
basic.forever(function () {
    OLED.clear()
    OLED.writeString("Temperature:")
    OLED.writeNum(temperature)
    if (temperature >= 28) {
        OLED.newLine()
        OLED.writeStringNewLine("(too high)")
    } else if (temperature <= 14) {
        OLED.newLine()
        OLED.writeStringNewLine("(too low)")
    } else {
        OLED.newLine()
        OLED.writeStringNewLine("(normal)")
    }
    OLED.newLine()
    OLED.writeString("Moisture:")
    OLED.writeNum(moisture)
    if (moisture >= 70) {
        OLED.newLine()
        OLED.writeStringNewLine("(too high)")
    } else if (moisture <= 20) {
        OLED.newLine()
        OLED.writeStringNewLine("(too low)")
    } else {
        OLED.newLine()
        OLED.writeStringNewLine("(normal)")
    }
    OLED.newLine()
    OLED.writeString("Light:")
    OLED.writeNum(light2)
    if (light2 >= 1000) {
        OLED.newLine()
        OLED.writeStringNewLine("(too high)")
    } else if (light2 <= 300) {
        OLED.newLine()
        OLED.writeStringNewLine("(too low)")
    } else {
        OLED.newLine()
        OLED.writeStringNewLine("(normal)")
    }
    basic.pause(10000)
})
basic.forever(function () {
    temperature = smarthome.ReadTemperature(TMP36Type.TMP36_temperature_C, AnalogPin.P1)
    moisture = smarthome.ReadSoilHumidity(AnalogPin.P4)
    if (moisture >= 70) {
        pins.digitalWritePin(DigitalPin.P6, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P6, 0)
    }
    light2 = pins.analogReadPin(AnalogReadWritePin.P10)
})
