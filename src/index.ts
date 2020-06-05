const Configuration = require('./Configuration.js')
const NumberLength = require('./NumberLength.js')
const AbstractRandomNumber = require('./AbstractRandomNumber.js')
const RandomNumber = require('./RandomNumber.js')
const RandomNumberTimestampBased = require('./RandomNumberTimestampBased.js')

class RandNum {
    /**
     * Generates a random number
     *
     * @param {Configuration|undefined} NumberConfiguration
     */
    constructor(NumberConfiguration = undefined) {
        this._number = this._generate(NumberConfiguration)
    }

    /**
     * Retrieves the number
     *
     * @return {AbstractRandomNumber}
     */
    getNumber() {
        return this._number
    }

    /**
     * Generates a random number
     *
     * @param {Configuration} NumberConfiguration
     * @return {AbstractRandomNumber}
     * @private
     */
    _generate(NumberConfiguration) {
        // If configuration instance not provided, generates a random configuration
        if (!(NumberConfiguration instanceof Configuration)) {
            NumberConfiguration = this._generateConfiguration()
        }

        return NumberConfiguration.isTimestampBased()
            ? new RandomNumberTimestampBased(NumberConfiguration)
            : new RandomNumber(NumberConfiguration)
    }

    /**
     * Generates a random Configuration
     *
     * @return {Configuration}
     * @private
     */
    _generateConfiguration() {
        const NumberConfiguration = new Configuration()
        return NumberConfiguration.setLength(new NumberLength().getValue())
    }
}

module.exports = {
    Configuration: Configuration,
    NumberLength: NumberLength,
    AbstractRandomNumber: AbstractRandomNumber,
    Generator: RandNum,
}
