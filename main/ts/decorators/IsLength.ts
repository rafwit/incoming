import isBrowser from '../helpers/isBrowser';
import propertyMapper from '../helpers/propertyMapper';

export default function IsLength(min: number, max: number) {
  return function (target: any, key: string): void {
    propertyMapper(target, key, (next: string | string[] | number[] | object[]) => {
      if (!(typeof next === 'string' || Array.isArray(next))) {
        if (isBrowser())
          throw new Error(`Validation failed on property: "${key}" - provided value does not have length`)
        else
          throw new Error(`\x1b[91mValidation failed on property: "${key}"\x1b[39m\x1b[93m - provided value does not have length\x1b[39m`)
      }
      if (next.length < min || next.length > max) {
        if (isBrowser())
          throw new Error(`Validation failed on property: "${key}" - value has length: ${next.length} - should have min: ${min} and max: ${max} length`);
        else
          throw new Error(`\x1b[91mValidation failed on property: "${key}"\x1b[39m\x1b[93m - value has length: ${next.length} - should have min: ${min} and max: ${max} length\x1b[39m`);
      }
      else return next;
    });
  };
}
