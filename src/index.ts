function RandonString(length) {
    let result = ''
    const characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let charactersLength = characters.length
    for (let i = 0; i < length; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
        )
    }
    return result
}
function RandonNum(length) {
    let result = ''
    const numbers = '0123456789'
    let numbersLength = numbers.length
    for (let i = 0; i < length; i++) {
        result += numbers.charAt(Math.floor(Math.random() * numbersLength))
    }
    return result
}
const RandNum = RandonNum
const RandString = RandonString

module.exports = RandString
module.exports = RandNum
