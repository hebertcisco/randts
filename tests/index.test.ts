'use strict';

import RandNum, { Configuration } from '../src/index';

describe('RandNum', () => {
  let NumberConfig: Configuration;
  let MAX_SAFE_LENGTH: number;
  beforeAll(() => {
    NumberConfig = new RandNum.Configuration();
    MAX_SAFE_LENGTH = RandNum.NumberLength.getMaxSafeLength();
  });
  beforeEach(() => {
    NumberConfig.reset();
    NumberConfig.timestampBased();
    NumberConfig.setMinLength(15);
    NumberConfig.setMaxLength(MAX_SAFE_LENGTH);
  });
  it('Configuring the random number generation', () => {
    NumberConfig.setMinLength(4);
    NumberConfig.setMaxLength(MAX_SAFE_LENGTH);
    const RandomNumber = new RandNum.Generator(NumberConfig);
    console.log('Random Number:');
    console.log(RandomNumber.getNumber());
    console.log('\n');
    process.stdout.write(`Random Number Value: ${RandomNumber.getNumber().getValue()}\n`);
    const expectMaxLength = NumberConfig.getMaxLength().getValue(); // 16
    expect(expectMaxLength).toBe(16);
  });
});
