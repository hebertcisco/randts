const MAX_SAFE_LENGTH: number = Number.MAX_SAFE_INTEGER.toString().length;

export class NumberLength {
  private _value: number;

  public constructor(length = 0) {
    this._value = this.computeLength(length);
    return this;
  }

  public static getMaxSafeLength(): number {
    return MAX_SAFE_LENGTH;
  }

  public getValue(): number {
    return this._value;
  }

  private computeLength(length: number): number {
    let value = length;
    const maxLength = MAX_SAFE_LENGTH;

    if (length > 0 && length > maxLength) {
      value = maxLength;
    } else if (!length) {
      value = Math.floor(Math.random() * maxLength) + 1;
    }

    return value;
  }
}

export default NumberLength;
