import NumberLength from '../../core/NumberLength';

export class Configuration {
  private _minLength: NumberLength;
  private _maxLength: NumberLength;
  private _timestampBased: boolean;

  constructor() {
    this._timestampBased = false;
    this._minLength = new NumberLength(0);
    this._maxLength = new NumberLength(0);
    this.reset();
  }

  reset(): Configuration {
    this._minLength = new NumberLength(0);
    this._maxLength = new NumberLength(0);
    this._timestampBased = false;
    return this;
  }

  public setLength(length: number): Configuration {
    this._validateLength(length);
    const Length = new NumberLength(length);
    this._minLength = new NumberLength(Length.getValue());
    this._maxLength = new NumberLength(Length.getValue());
    return this;
  }

  public setMinLength(length: number): Configuration {
    this._validateLength(length);
    this._minLength = new NumberLength(length);
    return this;
  }

  getMinLength() {
    if (!this._minLength) {
      this._minLength = new NumberLength();
    }

    if (this._maxLength && this._minIsGreaterThanMax()) {
      this._minLength = new NumberLength(this._maxLength.getValue());
    }

    return this._minLength;
  }
  public setMaxLength(length: number): Configuration {
    this._validateLength(length);
    this._maxLength = new NumberLength(length);
    return this;
  }

  public getMaxLength(): NumberLength {
    if (!this._maxLength) {
      this._maxLength = new NumberLength();
    }

    if (this._minLength && this._minIsGreaterThanMax()) {
      this._maxLength = new NumberLength(this._minLength.getValue());
    }

    return this._maxLength;
  }

  public timestampBased(): Configuration {
    this._timestampBased = true;
    return this;
  }

  public isTimestampBased(): boolean {
    return Boolean(this._timestampBased);
  }

  private _validateLength(length: number): boolean {
    if (length && typeof length !== 'number') {
      throw new Error('The length param must be a number');
    }

    return true;
  }

  private _minIsGreaterThanMax() {
    return this._minLength.getValue() > this._maxLength.getValue();
  }
}

export default Configuration;
