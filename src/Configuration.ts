const NumberLength = require('./NumberLength.js')

class Configuration {
    /**
     * Configures the random number generation
     */
    constructor() {
        this.reset()
    }

    /**
     * Resets the configuration to default state
     *
     * @return {Configuration}
     */
    reset() {
        /**
         * @type {NumberLength}
         * @private
         */
        this._minLength = 0

        /**
         * @type {NumberLength}
         * @private
         */
        this._maxLength = 0

        /**
         * @type {boolean}
         * @private
         */
        this._timestampBased = false
        return this
    }

    /**
     * Configures a fixed length
     *
     * @param {number} length
     * @return {Configuration}
     */
    setLength(length) {
        this._validateLength(length)
        const Length = new NumberLength(length)
        this._minLength = Length
        this._maxLength = Length
        return this
    }

    /**
     * Configures the min length
     *
     * @param {number} length
     * @return {Configuration}
     */
    setMinLength(length) {
        this._validateLength(length)
        this._minLength = new NumberLength(length)
        return this
    }

    /**
     * Retrieves the min length
     *
     * @return {NumberLength}
     */
    getMinLength() {
        if (!this._minLength) {
            this._minLength = new NumberLength()
        }

        if (this._maxLength && this._minIsGreaterThanMax()) {
            this._minLength = new NumberLength(this._maxLength.getValue())
        }

        return this._minLength
    }

    /**
     * Configures the max length
     *
     * @param {number} length
     * @return {Configuration}
     */
    setMaxLength(length) {
        this._validateLength(length)
        this._maxLength = new NumberLength(length)
        return this
    }

    /**
     * Retrieves the max length
     *
     * @return {NumberLength}
     */
    getMaxLength() {
        if (!this._maxLength) {
            this._maxLength = new NumberLength()
        }

        if (this._minLength && this._minIsGreaterThanMax()) {
            this._maxLength = new NumberLength(this._minLength.getValue())
        }

        return this._maxLength
    }

    /**
     * The number randomness will be based on timestamp
     *
     * @return {Configuration}
     */
    timestampBased() {
        this._timestampBased = true
        return this
    }

    /**
     * Verify if a number is timestamp based
     *
     * @return {boolean}
     */
    isTimestampBased() {
        return Boolean(this._timestampBased)
    }

    /**
     * Validate the length number
     *
     * @param {number} length
     * @return {boolean}
     * @private
     */
    _validateLength(length) {
        if (length && typeof length !== 'number') {
            throw new Error('The length param must be a number')
        }

        return true
    }

    /**
     * Verify if min length is valid
     *
     * @private
     */
    _minIsGreaterThanMax() {
        return this._minLength.getValue() > this._maxLength.getValue()
    }
}

module.exports = Configuration
