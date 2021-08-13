/**
 * The length of the max safe integer
 *
 * @type {number}
 */
const MAX_SAFE_LENGTH = Number.MAX_SAFE_INTEGER.toString().length

class NumberLength {
    /**
     * The number length
     *
     * @param {number} length
     */
    constructor(length = 0) {
        /**
         * @type {number}
         * @private
         */
        this._value = this._computeLength(length)
    }

    /**
     * Retrieves the max safe length, based on the length of the max safe integer
     *
     * @return {number}
     */
    static getMaxSafeLength() {
        return MAX_SAFE_LENGTH
    }

    /**
     * Retrieves the number length as number
     *
     * @return {number}
     */
    getValue() {
        return this._value
    }

    /**
     * Computes the length
     *
     * @param length
     * @return {number}
     * @private
     */
    _computeLength(length) {
        let value = length
        const maxLength = MAX_SAFE_LENGTH

        if (length > 0 && length > maxLength) {
            value = maxLength
        } else if (!length) {
            value = Math.floor(Math.random() * maxLength) + 1
        }

        return value
    }
}

module.exports = NumberLength
