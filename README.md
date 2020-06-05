# Rand TS

Random number generator and utilities

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

# Contributing

You can contribute to this project cloning this repository and in your clone you just need to create a new branch using a
name related to the new functionality which you'll create.  
When you finish your work, you just need to create a pull request which will be revised, merged to master branch (if the code
doesn't break the project) and published as a new release.
