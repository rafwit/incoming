import isBrowser from '../helpers/isBrowser';
import propertyMapper from '../helpers/propertyMapper';

export default function IsDecimalNum() {
  return function (target: any, key: string): void {
    propertyMapper(target, key, (next: number) => {
      if (typeof next !== 'number') {
        if (isBrowser())
          throw new Error(`Validation failed on property: "${key}" - expected number, received value of type: ${typeof next}`);
        else
          throw new Error(`\x1b[91mValidation failed on property: "${key}"\x1b[39m\x1b[93m - expected number, received value of type: ${typeof next}\x1b[39m`);
      }
      if (Number.isInteger(Number(next))) {
        if (isBrowser())
          throw new Error(`Validation failed on property: "${key}" expected decimal number, received ${typeof next}: ${next}`);
        else
          throw new Error(`\x1b[91mValidation failed on property: "${key}"\x1b[39m \x1b[93m expected decimal number, received ${typeof next}: ${next}\x1b[39m`);
      }
      else return next;
    });
  };
}