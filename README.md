# MakeCode Package for the ADS1115

This library provides a Microsoft Makecode package for the ADS1115.
See **https://joy-it.net/products/COM-KY053ADC** for more details.

## Behaviour considered to be a pass
As long as the raw value and voltages still change depending on what is/will be connected. This is considered a pass, even the small jitter of up to +/- 10 in the raw value is an indicator of a pass.

## Behaviour considered to be a fail
As soon as the output values no longer change. This is considered a failure, since the functionality is basically no longer given and no "real" value can be read.

## I2C Address
You can use the `Initialize ADS1115 with Address (...)` block to change the I2C address used for communication with the ADS.
```typescript
// Change the I2C address depending on how the ADS1115 is connected
// ADDR to GND -> 0x48 (default)
// ADDR to VCC -> 0x49
// ADDR to SDA -> 0x4A
// ADDR to SCL -> 0x4B
// Standard initialization with ADDR at GND, resulting in I2C address 0x48
ADS1115.initADS1115(userInI2C.Gnd)
```

## Mode
The `Set the Mode to (...)` block allows you to change the mode used to perform the measurements.
```typescript
// Change the mode depending on the type of measurement you want to perform
// Several measurements in succession (default)
ADS1115.setMode(mode.Multi)
// A single measurement
ADS1115.setMode(mode.Single)
```

## Gain
The `Set the Gain to (...)` block allows you to change the gain used in measurements and calculations.
```typescript
// Change the gain based on the voltages you want to use or work with
// + /-6.144V range  =  Gain 2/3
// + /-4.096V range  =  Gain 1
// + /-2.048V range  =  Gain 2 (default)
// + /-1.024V range  =  Gain 4
// + /-0.512V range  =  Gain 8
// + /-0.256V range  =  Gain 16
ADS1115.setGain(gain.Two)
```

## Sample Rate
With the block `Set the samplerate to (...)` you can change the number of measurements that the ADS1115 should perform in one second.
```typescript
// Change the samplerate to better fit your needs
// Values ADS1115
// Rate1 -> 8 samples per second
// Rate2 -> 16 samples per second
// Rate3 -> 32 samples per second
// Rate4 -> 64 samples per second
// Rate5 -> 128 samples per second (default)
// Rate6 -> 250 samples per second
// Rate7 -> 475 samples per second
// Rate8 -> 860 samples per Second
ADS1115.setRate(rate.Rate5)
```

## Reading Raw Values on Channels
To read the raw values from each channel, you can use the `Read on Channel (...)` block, which returns the raw value as a variable 'res'.
To fully use the block, it must write to the serial monitor.
```typescript
// Choosing the Channel which is to be read
// Channel 0 -> Single - ended AIN0 (default)
// Channel 1 -> Single - ended AIN1
// Channel 2 -> Single - ended AIN2
// Channel 3 -> Single - ended AIN3
// Channel 4 -> Differential P = AIN0, N = AIN1
// Channel 5 -> Differential P = AIN0, N = AIN3
// Channel 6 -> Differential P = AIN1, N = AIN3
// Channel 7 -> Differential P = AIN2, N = AIN3
serial.writeLine("" + (ADS1115.read(0)))
```

## Converting Raw Values to Voltages
To calculate the voltages of the individual channels, you can use the `Raw Value to Voltage` block, which returns the voltages based on the entered 'raw' variables.
To fully use the block, it must write to the serial monitor.
```typescript
// Reads any raw value (raw) either from the previously specified channel or from any other variable and converts it to voltages
serial.writeString("" + (ADS1115.raw_to_v(ADS1115.read(0))))
serial.writeLine(" V")
```

## Read raw values from multiple channels
To read the raw values from each channel, you can use the `Read from channel (...) to (...)` block, which returns the raw values of the specified channels.
```typescript
// Choosing which channels should be read
// start min = 0 | start max = 4
// end min = 0 | end max = 4
// Reads the specified channels (start, end) based on the specified parameters (0 to 4)
    readMulti = ADS1115.readMulti(0, 4)
    serial.writeLine("" + (readMulti[0]))
    serial.writeLine("" + (readMulti[1]))
    serial.writeLine("" + (readMulti[2]))
    serial.writeLine("" + (readMulti[3]))
    serial.writeLine("---------")
```

## Supported targets

* for PXT/microbit

## License

MIT
