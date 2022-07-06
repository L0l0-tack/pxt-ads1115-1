// These few lines can be used to test the library with all its functions.
// These lines show the possibility to change the following:
// 1. the Mode
// 2. the Gain
// 3. the Samplerate

// The other lines, which run indefinitely, show the following two capabilities:
// 1. The ability to read any channel of the ADS1115 selected between 0 and 7 and then return the raw value.
// 2. The ability to convert any previously read raw value into a voltage.

ADS1115.setMode(mode.Multi)
ADS1115.setGain(gain.One)
ADS1115.setRate(rate.Rate5)
basic.forever(function () {
    serial.writeLine("" + (ADS1115.read(0)))
    serial.writeString("" + (ADS1115.raw_to_v(ADS1115.read(0))))
    serial.writeLine(" V")
    serial.writeLine("---------")
    basic.pause(500)
})