import propertyMapper from '../helpers/propertyMapper';

export default function IsAlphaNumeric () {
  return function (target: any, key: string): void {
    propertyMapper(target, key, (next: string) => {
      const regex = /^([0-9]|[a-z])+([0-9a-z]+)$/i;
      if (!regex.test(next)) {
        throw new Error(`\x1b[91mValidation failed on property: "${key}"\x1b[39m \x1b[93m - value schould be alphanumeric only\x1b[39m`);
      } else {
        return next;
      }
    });
  }
}
