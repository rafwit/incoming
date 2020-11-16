import isBrowser from '../helpers/isBrowser';
import propertyMapper from '../helpers/propertyMapper';

export default function MinLength(min: number) {
  return function (target: any, key: string): void {
    propertyMapper(target, key, (next: string | string[] | number[] | object[]) => {
      if (!(typeof next === 'string' || Array.isArray(next))) {
        if (isBrowser())
          throw new Error(`Validation failed on property: "${key}" - value of type: ${typeof next}, does not have length`)
        else
          throw new Error(`\x1b[91mValidation failed on property: "${key}"\x1b[39m\x1b[93m - value of type: ${typeof next}, does not have length\x1b[39m`)
      }
      if (next.length < min) {
        if (isBrowser())
          throw new Error(`Validation failed on property: "${key}" - value has length: ${next.length}, should have length min: ${min}`);
        else
          throw new Error(`\x1b[91mValidation failed on property: "${key}"\x1b[39m\x1b[93m - value has length: ${next.length}, should have length min: ${min}\x1b[39m`);
      }
      else return next;
    });
  };
}