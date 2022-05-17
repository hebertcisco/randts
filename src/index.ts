import Configuration from './shared/config/Configuration';
import NumberLength from './core/NumberLength';
import AbstractRandomNumber from './core/AbstractRandomNumber';
import RandomNumber from './core/RandomNumber';
import RandomNumberTimestampBased from './core/RandomNumberTimestampBased';

export { Configuration } from './shared/config/Configuration';
export { NumberLength } from './core/NumberLength';
export { RandomNumber } from './core/RandomNumber';

export class RandNum {
  private _number: RandomNumberTimestampBased | RandomNumber;

  constructor(NumberConfiguration: Configuration | undefined = undefined) {
    this._number = this._generate(NumberConfiguration);
  }

  public getNumber(): AbstractRandomNumber {
    return this._number;
  }

  private _generate(NumberConfiguration: Configuration | undefined) {
    if (!(NumberConfiguration instanceof Configuration)) {
      NumberConfiguration = this._generateConfiguration();
    }

    return NumberConfiguration.isTimestampBased()
      ? new RandomNumberTimestampBased(NumberConfiguration)
      : new RandomNumber(NumberConfiguration);
  }

  private _generateConfiguration(): Configuration {
    const NumberConfiguration = new Configuration();
    return NumberConfiguration.setLength(new NumberLength().getValue());
  }
}

export default {
  Configuration: Configuration,
  NumberLength: NumberLength,
  AbstractRandomNumber: AbstractRandomNumber,
  Generator: RandNum,
};
