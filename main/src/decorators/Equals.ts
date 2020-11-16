import isBrowser from '../helpers/isBrowser';
import propertyMapper from '../helpers/propertyMapper';

export default function Equals(value: string) {
  return function (target: any, key: string): void {
    propertyMapper(target, key, (next: string) => {
      if (typeof next !== 'string') {
        if (isBrowser())
          throw new Error(`Validation failed on property: "${key}" - expected string, received value of type: ${typeof next}`)
        else
          throw new Error(`\x1b[91mValidation failed on property: "${key}"\x1b[39m\x1b[93m - expected string, received value of type: ${typeof next}\x1b[39m`)
      }
      if (next !== value) {
        if (isBrowser())
          throw new Error(`Validation failed on property: "${key}" - value schould equal: ${value}`);
        else
          throw new Error(`\x1b[91mValidation failed on property: "${key}"\x1b[39m\x1b[93m - value schould equal: ${value}\x1b[39m`);
      }
      else return next;
    });
  };
}