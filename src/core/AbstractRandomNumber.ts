import crypto from 'node:crypto';
import fpe from 'node-fpe';
import Configuration from '../shared/config/Configuration';
import NumberLength from './NumberLength';

class AbstractRandomNumber {
  private _length: NumberLength;
  protected _value: number;
  private _configuration!: Configuration;

  constructor(NumberConfiguration: Configuration) {
    this.setConfiguration(NumberConfiguration);
    this._length = new NumberLength();
    this._calculateLength();
    this._value = 0;
  }

  public getConfiguration(): Configuration {
    return this._configuration;
  }

  public setConfiguration(NumberConfiguration: Configuration) {
    this._validateConfigurationInstance(NumberConfiguration);
    this._configuration = NumberConfiguration;
  }

  public getLength(): NumberLength {
    return this._length;
  }

  public getValue(): number {
    return this._value;
  }

  protected _validateConfigurationInstance(NumberConfiguration: Configuration): boolean {
    if (!(NumberConfiguration instanceof Configuration)) {
      throw new Error('The NumberConfiguration param must be an instance of Configuration object');
    }

    return true;
  }

  protected _calculateLength() {
    const minLength = this._configuration.getMinLength().getValue();
    const maxLength = this._configuration.getMaxLength().getValue();

    this._length = new NumberLength(Math.floor(minLength + Math.random() * (maxLength + 1 - minLength)));
  }

  protected _increaseNumberRandomness(number: number): number {
    const bytes = 256;
    const cipher = fpe({ password: crypto.randomBytes(bytes) });

    let random = cipher.encrypt(number.toString());
    if (random.toString().charAt(0) === '0') {
      return this._increaseNumberRandomness(number);
    }

    return parseInt(random);
  }
}

export default AbstractRandomNumber;
