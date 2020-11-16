import isBrowser from '../helpers/isBrowser';
import propertyMapper from '../helpers/propertyMapper';

export default function MinNum(min: number) {
  return function (target: any, key: string): void {
    propertyMapper(target, key, (next: number) => {
      if (typeof next !== 'number') {
        if (isBrowser())
          throw new Error(`Validation failed on property: "${key}" - expected number, received value of type: ${typeof next}`);
        else
          throw new Error(`\x1b[91mValidation failed on property: "${key}"\x1b[39m\x1b[93m - expected number, received value of type: ${typeof next}\x1b[39m`);
        }
        if (next < min) {
          if (isBrowser())
            throw new Error(`Validation failed on property: "${key}" - value should be not less than: ${min}`);
          else
            throw new Error(`\x1b[91mValidation failed on property: "${key}"\x1b[39m\x1b[93m - value should be not less than: ${min}\x1b[39m`);
      }
      else return next;
    });
  };
}
