// With these few lines you can test the library with all its functions.
// These lines show the possibility to change the following:
// 1. the address
// 2. the mode
// 3. the gain
// 4. the sample rate
let readMulti: number[] = []
ADS1115.initADS1115(userInI2C.Gnd)
ADS1115.setMode(mode.Multi)
ADS1115.setGain(gain.One)
ADS1115.setRate(rate.Rate5)

// The other lines, which run infinitely, show the following two capabilities:
// 1. The ability to read any channel of the ADS1115 between 0 and 7 and then return the raw value.
// 2. The ability to convert any previously read raw value into a voltage.
// 3. The ability to read multiple channels of the ADS1115 simultaneously.
basic.forever(function () {
    serial.writeLine("" + (ADS1115.read(0)))
    serial.writeString("" + (ADS1115.raw_to_v(ADS1115.read(0))))
    serial.writeLine(" V")
    basic.pause(25)
    readMulti = ADS1115.readMulti(0, 4)
    serial.writeLine("" + (readMulti[0]))
    serial.writeLine("" + (readMulti[1]))
    serial.writeLine("" + (readMulti[2]))
    serial.writeLine("" + (readMulti[3]))
    serial.writeLine("---------")
    basic.pause(1000)
})