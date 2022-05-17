import AbstractRandomNumber from './AbstractRandomNumber';
import Configuration from '../shared/config/Configuration';
import RandomNumber from './RandomNumber';
import NumberLength from './NumberLength';

class RandomNumberTimestampBased extends AbstractRandomNumber {
  private _padLength: NumberLength;
  private _timestamp: number;
  private _timestampLength: NumberLength;

  constructor(NumberConfiguration: Configuration) {
    super(NumberConfiguration);
    this._padLength = new NumberLength(0);
    this._timestamp = Date.now();
    this._timestampLength = new NumberLength(this._timestamp.toString().length);
    this._value = this._generate();
  }

  private _generate(): number {
    this._verifyLength();

    let value = this._timestamp.toString();
    let numberLength = this.getLength().getValue();

    if (numberLength > this._timestampLength.getValue()) {
      value += this._generatePad().getValue().toString();
    }

    return super._increaseNumberRandomness(parseInt(value));
  }

  private _verifyLength() {
    let touched = false;
    const timestampLength = this._timestampLength.getValue();

    if (this.getConfiguration().getMinLength().getValue() < timestampLength) {
      this.getConfiguration().setMinLength(timestampLength);
      touched = true;
    }

    if (this.getConfiguration().getMaxLength().getValue() < timestampLength) {
      const maxLengthConfig = new Configuration();

      maxLengthConfig.setLength(NumberLength.getMaxSafeLength());
      this.getConfiguration().setMaxLength(new RandomNumber(maxLengthConfig).getValue());
      touched = true;
    }

    if (touched) {
      this._calculateLength();
    }
  }

  public _generatePad(): RandomNumber {
    const numberLength = this.getLength().getValue();
    const padConfig = new Configuration();

    this._padLength = new NumberLength(numberLength - this._timestampLength.getValue());
    padConfig.setLength(this._padLength.getValue());

    return new RandomNumber(padConfig);
  }
}

export default RandomNumberTimestampBased;
