import AbstractRandomNumber from './AbstractRandomNumber';
import Configuration from '../shared/config/Configuration';

export class RandomNumber extends AbstractRandomNumber {
  constructor(NumberConfiguration: Configuration) {
    super(NumberConfiguration);
    this._value = this._generate();
  }

  private _generate(): number {
    const length = super.getLength().getValue();

    const number = Math.floor(
      Math.pow(10, length - 1) + Math.random() * (Math.pow(10, length) - Math.pow(10, length - 1) - 1),
    );

    return super._increaseNumberRandomness(number);
  }
}

export default RandomNumber;
