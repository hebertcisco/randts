const crypto = require('crypto')
const fpe = require('node-fpe')
const Configuration = require('./Configuration.js')
const NumberLength = require('./NumberLength.js')

class AbstractRandomNumber {
    /**
     * A random number
     *
     * @param {Configuration} NumberConfiguration
     */
    constructor(NumberConfiguration) {
        this.setConfiguration(NumberConfiguration)

        /**
         * @type {NumberLength}
         * @protected
         */
        this._length = 0
        this._calculateLength()

        /**
         * @type {number}
         * @protected
         */
        this._value = 0
    }

    /**
     * Returns the number configuration
     *
     * @return {Configuration}
     */
    getConfiguration() {
        return this._configuration
    }

    /**
     * Set the number configuration
     *
     * @param {Configuration} NumberConfiguration
     */
    setConfiguration(NumberConfiguration) {
        this._validateConfigurationInstance(NumberConfiguration)
        this._configuration = NumberConfiguration
    }

    /**
     * Retrieves the number length
     *
     * @return {NumberLength}
     */
    getLength() {
        return this._length
    }

    /**
     * Retrieves the number value
     *
     * @return {number}
     */
    getValue() {
        return this._value
    }

    /**
     * Validate if NumberConfiguration param is an instance of Configuration object
     *
     * @param {Configuration} NumberConfiguration
     * @return {boolean}
     * @protected
     */
    _validateConfigurationInstance(NumberConfiguration) {
        if (!(NumberConfiguration instanceof Configuration)) {
            throw new Error(
                'The NumberConfiguration param must be an instance of Configuration object'
            )
        }

        return true
    }

    /**
     * Randomize a length between the min and max length configured
     *
     * @return {NumberLength}
     * @protected
     */
    _calculateLength() {
        const minLength = this._configuration.getMinLength().getValue()
        const maxLength = this._configuration.getMaxLength().getValue()

        this._length = new NumberLength(
            Math.floor(minLength + Math.random() * (maxLength + 1 - minLength))
        )
    }

    /**
     * Return a new number with strong randomness
     *
     * @param {number} number
     * @return {number}
     * @protected
     */
    _increaseNumberRandomness(number) {
        const bytes = 256
        const cipher = fpe({ password: crypto.randomBytes(bytes) })

        let random = cipher.encrypt(number.toString())
        if (random.toString().charAt(0) === '0') {
            return this._increaseNumberRandomness(number)
        }

        return parseInt(random)
    }
}

module.exports = AbstractRandomNumber
