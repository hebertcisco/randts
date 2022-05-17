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

### > [Demo in NPM runkit](https://npm.runkit.com/randts)

With this package, you can create Random Numbers and Timestamp Based Random Numbers with low probability of collision
using strong randomized bytes as seeds. You can specify the min and max lengths (which will generate a random length
between this values) or configure a specific length.

## Installation

With npm:

```bash
npm install randts --save
```

With yarn:

```bash
yarn add randts
```

With pnpm:

```bash
pnpm add randts --save
```

With Git HTTPS:

```bash
git clone https://github.com/hebertcisco/randts.git
```

With Github Cli:

```bash
gh repo clone hebertcisco/randts
```

## randts

## How to use

> To use the package just do as in the script below:

### Configuring the random number generation

#### CJS

```cjs
const { Configuration } = require('randts');
const randts = require('randts');

const NumberConfig = new Configuration();
NumberConfig.setMinLength(4);
NumberConfig.setMaxLength(randts.NumberLength.getMaxSafeLength());
```

### Generates a random number

```cjs
const { Generator, Configuration } = require('randts');

const NumberConfig = new Configuration();
const RandomNumber = new Generator(NumberConfig);
console.log('Random Number:');
console.log(RandomNumber.getNumber());
console.log('\n');
console.log('Random Number Value:', RandomNumber.getNumber().getValue());
console.log('\n');
```

### Reconfiguring the random number generation

```cjs
const randts = require('randts');
const { Configuration } = require('randts');

const NumberConfig = new Configuration();

NumberConfig.reset();
NumberConfig.timestampBased();
NumberConfig.setMinLength(15);
NumberConfig.setMaxLength(randts.NumberLength.getMaxSafeLength());
```

### Generates a random number timestamp based

```cjs
const randts = require('randts');
const { NumberConfig, Generator } = require('randts');

const RandomNumberTimestampBased = new Generator(NumberConfig);
console.log('Random Number timestamp based:');
console.log(RandomNumberTimestampBased.getNumber());
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
