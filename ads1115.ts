/**
  * Enumeration of the I2C addresses
  */
enum userInI2C {
    //% block="GND_0x48"
    Gnd,
    //% block="VCC_0x49"
    Vcc,
    //% block="SDA_0x4A"
    Sda,
    //% block="SCL_0x4B"
    Scl
}

/**
  * Enumeration of gains
  */
enum gain {
    //% block="TWOTHIRDS"
    Twothirds,
    //% block="ONE"
    One,
    //% block="TWO"
    Two,
    //% block="FOUR"
    Four,
    //% block="EIGHT"
    Eight,
    //% block="SIXTEEN"
    Sixteen
}

/**
  * Enumeration of sample rates
  */
enum rate {
    //% block="RATE1_8SPS"
    Rate1,
    //% block="RATE2_16SPS"
    Rate2,
    //% block="RATE3_32SPS"
    Rate3,
    //% block="RATE4_64SPS"
    Rate4,
    //% block="RATE5_128SPS"
    Rate5,
    //% block="RATE6_250SPS"
    Rate6,
    //% block="RATE7_475SPS"
    Rate7,
    //% block="RATE8_860SPS"
    Rate8
}

/**
  * Enumeration of modes
  */
enum mode {
    //% block="SINGLE"
    Single,
    //% block="MULTI"
    Multi
}

/**
  * ADS1115 16-Bit ADC block
  */
//% color="#275C6B" weight=100 icon="\uf0e7" block="ADS1115"
namespace ADS1115 {
    // Register variables
    const _REGISTER_MASK = 0x03
    const _REGISTER_CONVERT = 0x00
    const _REGISTER_CONFIG = 0x01
    const _REGISTER_LOWTHRESH = 0x02
    const _REGISTER_HITHRESH = 0x03

    const _OS_MASK = 0x8000
    const _OS_SINGLE = 0x8000     // Write: Set to start a single - conversion
    const _OS_BUSY = 0x0000       // Read: Bit = 0 when conversion is in progress
    const _OS_NOTBUSY = 0x8000    // Read: Bit = 1 when no conversion is in progress

    // Channel variables
    const _MUX_MASK = 0x7000
    const _MUX_DIFF_0_1 = 0x0000  // Differential P = AIN0, N = AIN1 (default)
    const _MUX_DIFF_0_3 = 0x1000  // Differential P = AIN0, N = AIN3
    const _MUX_DIFF_1_3 = 0x2000  // Differential P = AIN1, N = AIN3
    const _MUX_DIFF_2_3 = 0x3000  // Differential P = AIN2, N = AIN3
    const _MUX_SINGLE_0 = 0x4000  // Single - ended AIN0
    const _MUX_SINGLE_1 = 0x5000  // Single - ended AIN1
    const _MUX_SINGLE_2 = 0x6000  // Single - ended AIN2
    const _MUX_SINGLE_3 = 0x7000  // Single - ended AIN3

    // Gain variables
    const _PGA_MASK = 0x0E00
    const _PGA_6_144V = 0x0000    // + /-6.144V range  =  Gain 2/3
    const _PGA_4_096V = 0x0200    // + /-4.096V range  =  Gain 1
    const _PGA_2_048V = 0x0400    // + /-2.048V range  =  Gain 2 (default)
    const _PGA_1_024V = 0x0600    // + /-1.024V range  =  Gain 4
    const _PGA_0_512V = 0x0800    // + /-0.512V range  =  Gain 8
    const _PGA_0_256V = 0x0A00    // + /-0.256V range  =  Gain 16

    // Mode variables
    const _MODE_MASK = 0x0100
    const _MODE_CONTIN = 0x0000   // Continuous conversion mode
    const _MODE_SINGLE = 0x0100   // Power - down single - shot mode (default)

    // Samplerate variables
    const _DR_MASK = 0x00E0       // ADS1115
    const _DR_128SPS = 0x0000     // 8 samples per second
    const _DR_250SPS = 0x0020     // 16 samples per second
    const _DR_490SPS = 0x0040     // 32 samples per second
    const _DR_920SPS = 0x0060     // 64 samples per second
    const _DR_1600SPS = 0x0080    // 128 samples per second (default)
    const _DR_2400SPS = 0x00A0    // 250 samples per second
    const _DR_3300SPS = 0x00C0    // 475 samples per second
    const _DR_860SPS = 0x00E0     // 860 samples per Second

    const _CMODE_MASK = 0x0010
    const _CMODE_TRAD = 0x0000    // Traditional comparator with hysteresis (default)
    const _CMODE_WINDOW = 0x0010  // Window comparator

    const _CPOL_MASK = 0x0008
    const _CPOL_ACTVLOW = 0x0000  // ALERT / RDY pin is low when active (default)
    const _CPOL_ACTVHI = 0x0008   // ALERT / RDY pin is high when active

    const _CLAT_MASK = 0x0004     // Determines if ALERT / RDY pin latches once asserted
    const _CLAT_NONLAT = 0x0000   // Non - latching comparator (default)
    const _CLAT_LATCH = 0x0004    // Latching comparator

    const _CQUE_MASK = 0x0003
    const _CQUE_1CONV = 0x0000    // Assert ALERT / RDY after one conversions
    const _CQUE_2CONV = 0x0001    // Assert ALERT / RDY after two conversions
    const _CQUE_4CONV = 0x0002    // Assert ALERT / RDY after four conversions
    const _CQUE_NONE = 0x0003     // Disable the comparator and put ALERT / RDY in high state (default)

    // List of usable gains
    let _GAINS = [
        _PGA_6_144V,    // 2 / 3x
        _PGA_4_096V,    // 1x
        _PGA_2_048V,    // 2x (default)
        _PGA_1_024V,    // 4x
        _PGA_0_512V,    // 8x
        _PGA_0_256V     // 16x
    ];

    // List of voltage values corresponding to the list of usable gains
    let _GAINS_V = [
        6.144,          // 2 / 3x
        4.096,          // 1x
        2.048,          // 2x (default)
        1.024,          // 4x
        0.512,          // 8x
        0.256           // 16x
    ];

    // List of the different usable channels
    let _CHANNELS = [   // CH1|CH2
        _MUX_SINGLE_0,  // (0, None) (default)
        _MUX_SINGLE_1,  // (1, None)
        _MUX_SINGLE_2,  // (2, None)
        _MUX_SINGLE_3,  // (3, None)
        _MUX_DIFF_0_1,  // (0, 1)
        _MUX_DIFF_0_3,  // (0, 3)
        _MUX_DIFF_1_3,  // (1, 3)
        _MUX_DIFF_2_3,  // (2, 3)
    ];

    // List of all usable sample rates
    let _RATES = [
        _DR_128SPS,     // 128 / 8 samples per second
        _DR_250SPS,     // 250 / 16 samples per second
        _DR_490SPS,     // 490 / 32 samples per second
        _DR_920SPS,     // 920 / 64 samples per second
        _DR_1600SPS,    // 1600 / 128 samples per second (default)
        _DR_2400SPS,    // 2400 / 250 samples per second
        _DR_3300SPS,    // 3300 / 475 samples per second
        _DR_860SPS      // - /860 samples per Second
    ];

    // All global variables used in the library, as well as some predefined variables that serve as default values
    let adsaddress = 0x48
    let adsgain = _GAINS[0]
    let adsrate = _RATES[4]
    let adsmode = _MODE_CONTIN
    let adsgainv: number = 2

    /**
     * Changing the I2C address based on user input
     */
    //% blockId="ADS1115_SET_ADDRESS" block="Initialize ADS1115 with address %userInI2C"
    //% color="#275C6B" weight=100 blockGap=8
    //% parts=adc_ads1115 trackArgs=0
    export function initADS1115(selection: userInI2C): void {
        if (selection == userInI2C.Gnd) {
            adsaddress = 0x48
        }
        else if (selection == userInI2C.Vcc) {
            adsaddress = 0x49
        }
        else if (selection == userInI2C.Sda) {
            adsaddress = 0x4A
        }
        else if (selection == userInI2C.Scl) {
            adsaddress = 0x4B
        }
    }

    /**
     * Change the gains based on the user input
     */
    //% blockId="ADS1115_SET_GAIN" block="Set the gain to %gain"
    //% color="#275C6B" weight=100 blockGap=8
    //% parts=adc_ads1115 trackArgs=0
    export function setGain(selection: gain): void {
        if (selection == gain.Twothirds) {
            adsgain = _GAINS[0]
            adsgainv = 0
        }
        else if (selection == gain.One) {
            adsgain = _GAINS[1]
            adsgainv = 1
        }
        else if (selection == gain.Two) {
            adsgain = _GAINS[2]
            adsgainv = 2
        }
        else if (selection == gain.Four) {
            adsgain = _GAINS[3]
            adsgainv = 3
        }
        else if (selection == gain.Eight) {
            adsgain = _GAINS[4]
            adsgainv = 4
        }
        else if (selection == gain.Sixteen) {
            adsgain = _GAINS[5]
            adsgainv = 5
        }
    }

    /**
     * Change the sample rate based on user input
     */
    //% blockId="ADS1115_SET_SAMPLERATE" block="Set the sample rate to %rate"
    //% color="#275C6B" weight=100 blockGap=8
    //% parts=adc_ads1115 trackArgs=0
    export function setRate(selection: rate): void {
        if (selection == rate.Rate1) {
            adsrate = _RATES[0]
        }
        else if (selection == rate.Rate2) {
            adsrate = _RATES[1]
        }
        else if (selection == rate.Rate3) {
            adsrate = _RATES[2]
        }
        else if (selection == rate.Rate4) {
            adsrate = _RATES[3]
        }
        else if (selection == rate.Rate5) {
            adsrate = _RATES[4]
        }
        else if (selection == rate.Rate6) {
            adsrate = _RATES[5]
        }
        else if (selection == rate.Rate7) {
            adsrate = _RATES[6]
        }
        else if (selection == rate.Rate8) {
            adsrate = _RATES[7]
        }
    }

    /**
     * Change the mode based on user input
     */
    //% blockId="ADS1115_SET_MODE" block="Set the mode to %mode"
    //% color="#275C6B" weight=100 blockGap=8
    //% parts=adc_ads1115 trackArgs=0
    export function setMode(selection: mode): void {
        if (selection == mode.Single) {
            adsmode = _MODE_SINGLE
        }
        else if (selection == mode.Multi) {
            adsmode = _MODE_CONTIN
        }
    }

    // Write the required 16-bit value into the register
    function _write_register(register: number, value: number) {
        let temp: number[] = []
        // The variable 'value' is shifted 8 bits to the right and inserted into the list temp[] at position 1.
        temp.insertAt(1, (value >> 8) & 0xff)
        // Insert the variable 'value' at position 2 in the temp[] list.
        temp.insertAt(2, (value & 0xff))
        // Create a buffer that will be used to send all the required data at once.
        let num = pins.createBuffer(3)
        // Set the data of the buffer at position 0 to the register value.
        num.setNumber(NumberFormat.Int8LE, 0, register)
        // Set the data of the buffer at position 1 to the value of position 1 from the temp[] list.
        num.setNumber(NumberFormat.Int8LE, 1, temp[1])
        // Set the data of the buffer at position 2 to the value of position 2 from the temp[] list.
        num.setNumber(NumberFormat.Int8LE, 2, temp[2])
        // Send the buffer with the now added data via I2C to the set I2C address.
        pins.i2cWriteBuffer(adsaddress, num, false)
    }

    // Read the 16-bit register value that will be returned
    function _read_register(register: number) {
        // Writing the register to be read to the set I2C address.
        pins.i2cWriteNumber(adsaddress, register, NumberFormat.Int8LE, false)
        // Read all data returned after writing to the specified register.
        let result = pins.i2cReadBuffer(adsaddress, 2, false)
        // Get the data and put it into 2 different variables.
        let result1 = result.getNumber(NumberFormat.UInt8LE, 0)
        let result2 = result.getNumber(NumberFormat.UInt8LE, 1)
        // Return the data combined with the Bitwise operator '|' = Bitwise 'OR'.
        // 'result1' must be shifted 8 bits to the left so that we end up with the required 16-bit value.
        return result1 << 8 | result2
    }

    /**
     * Reads any raw value (raw) either from the previously specified channel or from any other variable and converts it to voltages
     */
    //% blockId="ADS1115_RAW2V" block="%raw value to voltage"
    //% color="#275C6B" weight=100 blockGap=8
    //% parts=adc_ads1115 trackArgs=0
    export function raw_to_v(raw: number) {
        let v_p_b = _GAINS_V[adsgainv] / 32767
        return Math.roundWithPrecision(raw * v_p_b, 2)
    }

    /**
     * Reads the specified channel of the ADS1115
     */
    //% blockId="ADS1115_READ" block="Read on channel %chan"
    //% color="#275C6B" weight=100 blockGap=8
    //% parts=adc_ads1115 trackArgs=0
    export function read(chan: number) {
        // Linking of all required data by the bitwise 'OR ('|')' operator.
        let config = 0x0000
        config |= _CHANNELS[chan]
        config |= adsgain
        config |= adsrate
        config |= adsmode
        config |= _CQUE_NONE
        // Sending the required data to the specified register.
        _write_register(_REGISTER_CONFIG, config)
        while (!(_read_register(_REGISTER_CONFIG) & _OS_NOTBUSY))
            break
        // Reading the returned data.
        let res = _read_register(_REGISTER_CONVERT)
        if (res < 32768) {
            return res
        }
        else {
            res = res - 65469
            return res
        }
    }
}
