import propertyMapper from '../helpers/propertyMapper';

export default function IsAlphaNumeric (value: string) {
  return function (target: any, key: string): void {
    propertyMapper(target, key, (next: string) => {
      const regex = /^([0-9]|[a-z])+([0-9a-z]+)$/i;
      if (!regex.test(next)) {
        throw new Error(`\x1b[91mValidation Error:\x1b[39m on ${target}[${key}] - value schould be alphanumeric only`);
      } else {
        return next;
      }
    });
  }
}
