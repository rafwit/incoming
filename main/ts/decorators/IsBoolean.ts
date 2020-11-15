import propertyMapper from '../helpers/propertyMapper';

export default function IsBoolean() {
  return function (target: any, key: string): void {
    propertyMapper(target, key, (next: boolean) => {
      if (next !== true && next !== false) {
        throw new Error(`\x1b[91mValidation failed on property: "${key}"\x1b[39m\x1b[93m - expected boolean, received value of type: ${typeof next}\x1b[39m`);
      } else {
        return next;
      }
    });
  };
}
