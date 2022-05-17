<p align="center">
 <img width="100px" src="https://raw.githubusercontent.com/hebertcisco/randts/master/.github/images/favicon512x512-randts.png" align="center" alt=":package: randts" />
 <h2 align="center">:package: randts</h2>
 <p align="center">Random number generator and utilities</p>
</p>

  <p align="center">
    <a href="https://github.com/hebertcisco/randts/issues">
      <img alt="Issues" src="https://img.shields.io/github/issues/hebertcisco/randts?style=flat&color=336791" />
    </a>
    <a href="https://github.com/hebertcisco/randts/pulls">
      <img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/hebertcisco/randts?style=flat&color=336791" />
    </a>
     <a href="https://github.com/hebertcisco/randts">
      <img alt="GitHub Downloads" src="https://img.shields.io/npm/dw/randts?style=flat&color=336791" />
    </a>
    <a href="https://github.com/hebertcisco/randts">
      <img alt="GitHub Total Downloads" src="https://img.shields.io/npm/dt/randts?color=336791&label=Total%20downloads" />
    </a>
    <br />
    <br />
  <a href="https://github.com/hebertcisco/randts/issues/new/choose">Report Bug</a>
  <a href="https://github.com/hebertcisco/randts/issues/new/choose">Request Feature</a>
  </p>

### > [Demo](https://npm.runkit.com/randts)

With this package, you can create Random Numbers and Timestamp Based Random Numbers with low probability of collision
using strong randomized bytes as seeds. You can specify the min and max lengths (which will generate a random length
between this values) or configure a specific length.

## Installation

With npm:

```
npm install randts --save
```

```
https://github.com/tecnobert/randts.git
```

## Random Numbers

## How to use

> To use the module just do as in the script below:

```ts
'use strict'

const RandNum = require('randts')

// Configuring the random number generation
const NumberConfig = new RandNum.Configuration()
NumberConfig.setMinLength(4)
NumberConfig.setMaxLength(RandNum.NumberLength.getMaxSafeLength())

// Generates a random number
const RandomNumber = new RandNum.Generator(NumberConfig)
console.log('Random Number:')
console.log(RandomNumber.getNumber())
console.log('\n')
console.log('Random Number Value:', RandomNumber.getNumber().getValue())
console.log('\n')

// Reconfiguring the random number generation
NumberConfig.reset()
NumberConfig.timestampBased()
NumberConfig.setMinLength(15)
NumberConfig.setMaxLength(RandNum.NumberLength.getMaxSafeLength())

// Generates a random number timestamp based
const RandomNumberTimestampBased = new RandNum.Generator(NumberConfig)
console.log('Random Number timestamp based:')
console.log(RandomNumberTimestampBased.getNumber())
```

The console response might be:

```sh
Random Number:
RandomNumber {
  _configuration: Configuration {
    _minLength: NumberLength { _value: 4 },
    _maxLength: NumberLength { _value: 16 },
    _timestampBased: false
  },
  _length: NumberLength { _value: 6 },
  _value: 905120
}


Random Number Value: 905120


Random Number timestamp based:
RandomNumberTimestampBased {
  _configuration: Configuration {
    _minLength: NumberLength { _value: 15 },
    _maxLength: NumberLength { _value: 16 },
    _timestampBased: true
  },
  _length: NumberLength { _value: 16 },
  _value: 6136576455102591,
  _padLength: NumberLength { _value: 3 },
  _timestamp: 1591321833567,
  _timestampLength: NumberLength { _value: 13 }
}
(node:18510) [DEP0106] DeprecationWarning: crypto.createCipher is deprecated.
Done in 0.16s.
```

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](issues).

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/hebertcisco/5rate-star)

## Show your support

Give a ⭐️ if this project helped you!

Or buy me a coffee 🙌🏾

<a href="https://www.buymeacoffee.com/hebertcisco">
    <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=hebertcisco&button_colour=FFDD00&font_colour=000000&font_family=Inter&outline_colour=000000&coffee_colour=ffffff" />
</a>

## 📝 License

Copyright © 2022 [Hebert F Barros](https://github.com/hebertcisco).<br />
This project is [MIT](LICENSE) licensed.
