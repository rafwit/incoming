import propertyMapper from '../helpers/propertyMapper';

export default function IsNumber() {
  return function (target: any, key: string): void {
    propertyMapper(target, key, (next: number) => {
      if (typeof next !== 'number') {
        throw new Error(`\x1b[91mValidation failed on property: "${key}"\x1b[39m\x1b[93m - expected number, received value of type: ${typeof next}\x1b[39m`);
      }
      else return next;

    });
  };
}
