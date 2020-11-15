import propertyMapper from '../helpers/propertyMapper';

export default function NotEmpty() {
  return function (target: any, key: string): void {
    propertyMapper(target, key, (next: string) => {
      if ((!next.length || Object.keys(next).length === 0) && typeof next !== 'number') {
        throw new Error(`\x1b[91mValidation failed on property: "${key}"\x1b[39m\x1b[93m - value should not be an empty ${typeof next}\x1b[39m`);
      }
      else return next;
    });
  };
}
