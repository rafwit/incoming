import isBrowser from '../helpers/isBrowser';
import propertyMapper from '../helpers/propertyMapper';

export default function IsBoolean() {
  return function (target: any, key: string): void {
    propertyMapper(target, key, (next: boolean) => {
      if (next !== true && next !== false) {
        if (isBrowser())
          throw new Error(`Validation failed on property: "${key}" - expected boolean, received value of type: ${typeof next}`);
        else
          throw new Error(`\x1b[91mValidation failed on property: "${key}"\x1b[39m\x1b[93m - expected boolean, received value of type: ${typeof next}\x1b[39m`);
      }
      else return next;
    });
  };
}
