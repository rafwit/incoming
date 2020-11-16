import isBrowser from '../helpers/isBrowser';
import propertyMapper from '../helpers/propertyMapper';

export default function IsDateObj() {
  return function (target: any, key: string): void {
    propertyMapper(target, key, (next: string) => {
      if (Object.prototype.toString.call(next) !== "[object Date]") {
        if (isBrowser())
          throw new Error(`Validation failed on property: "${key}" - expected date object`);
        else
          throw new Error(`\x1b[91mValidation failed on property: "${key}"\x1b[39m\x1b[93m - expected date object\x1b[39m`);
      }
      else return next;
    });
  };
}
