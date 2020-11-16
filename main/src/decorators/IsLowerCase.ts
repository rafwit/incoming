import isBrowser from '../helpers/isBrowser';
import propertyMapper from '../helpers/propertyMapper';

export default function IsLowerCase() {
  return function (target: any, key: string): void {
    propertyMapper(target, key, (next: string) => {
      if (typeof next !== 'string') {
        if (isBrowser())
          throw new Error(`Validation failed on property: "${key}" - expected string, received value of type: ${typeof next}`)
        else
          throw new Error(`\x1b[91mValidation failed on property: "${key}"\x1b[39m\x1b[93m - expected string, received value of type: ${typeof next}\x1b[39m`)
        }
      if (next.toLowerCase() !== next) {
        if (isBrowser())
          throw new Error(`Validation failed on property: "${key}" - expected all lower case, received ${typeof next}: ${next}`);
        else
          throw new Error(`\x1b[91mValidation failed on property: "${key}"\x1b[39m \x1b[93m - expected all lower case, received ${typeof next}: ${next}\x1b[39m`);
      }
      else return next;
    });
    };
}