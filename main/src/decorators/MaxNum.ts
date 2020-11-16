import isBrowser from '../helpers/isBrowser';
import propertyMapper from '../helpers/propertyMapper';

export default function MaxNum(max: number) {
  return function (target: any, key: string): void {
    propertyMapper(target, key, (next: number) => {
      if (typeof next !== 'number') {
        if (isBrowser())
          throw new Error(`Validation failed on property: "${key}" - expected number, received value of type: ${typeof next}`);
        else
          throw new Error(`\x1b[91mValidation failed on property: "${key}"\x1b[39m\x1b[93m - expected number, received value of type: ${typeof next}\x1b[39m`);
        }
        if (next > max) {
          if (isBrowser())
            throw new Error(`Validation failed on property: "${key}" - value should be not grater than: ${max}`);
          else
            throw new Error(`\x1b[91mValidation failed on property: "${key}"\x1b[39m\x1b[93m - value should be not grater than: ${max}\x1b[39m`);
      }
      else return next;
    });
  };
}
