const AbstractRandomNumber = require('./AbstractRandomNumber.js')
const Configuration = require('./Configuration.js')
const RandomNumber = require('./RandomNumber.js')
const NumberLength = require('./NumberLength.js')

class RandomNumberTimestampBased extends AbstractRandomNumber {
    /**
     * A random number timestamp based
     *
     * @param {Configuration} NumberConfiguration
     */
    constructor(NumberConfiguration) {
        super(NumberConfiguration)

        /**
         * @type {NumberLength}
         * @private
         */
        this._padLength = 0

        /**
         * @type {number}
         * @private
         */
        this._timestamp = Date.now()

        /**
         * @type {NumberLength}
         * @private
         */
        this._timestampLength = new NumberLength(
            this._timestamp.toString().length
        )

        /**
         * @type {number}
         * @private
         */
        this._value = this._generate()
    }

    /**
     * Generates a random number based on current timestamp
     *
     * @return {number}
     * @private
     */
    _generate() {
        this._verifyLength()

        let value = this._timestamp.toString()
        let numberLength = this.getLength().getValue()

        if (numberLength > this._timestampLength.getValue()) {
            value += this._generatePad().getValue().toString()
        }

        return super._increaseNumberRandomness(parseInt(value))
    }

    /**
     * Test the min and max lengths, if not valid, will generate lengths based on
     * timestamp length and max safe integer length (the min length of a timestamp
     * based number cannot be less than the length of the current timestamp)
     *
     * @private
     */
    _verifyLength() {
        let touched = false
        const timestampLength = this._timestampLength.getValue()

        // min length must have at least the length of current timestamp
        if (
            this.getConfiguration().getMinLength().getValue() < timestampLength
        ) {
            this.getConfiguration().setMinLength(timestampLength)
            touched = true
        }

        // max length must have at least the length of current timestamp
        // and the max safe integer length
        if (
            this.getConfiguration().getMaxLength().getValue() < timestampLength
        ) {
            const maxLengthConfig = new Configuration()

            maxLengthConfig.setLength(NumberLength.getMaxSafeLength())
            this.getConfiguration().setMaxLength(
                new RandomNumber(maxLengthConfig).getValue()
            )
            touched = true
        }

        if (touched) {
            this._calculateLength()
        }
    }

    /**
     * Creates a random number to pad the number length configured
     *
     * @return {RandomNumber}
     * @private
     */
    _generatePad() {
        const numberLength = this.getLength().getValue()
        const padConfig = new Configuration()

        this._padLength = new NumberLength(
            numberLength - this._timestampLength.getValue()
        )
        padConfig.setLength(this._padLength.getValue())

        return new RandomNumber(padConfig)
    }
}

module.exports = RandomNumberTimestampBased
