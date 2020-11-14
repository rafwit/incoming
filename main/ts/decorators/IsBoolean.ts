import propertyMapper from '../helpers/propertyMapper';

export default function IsBoolean() {
  // eslint-disable-next-line func-names
  return function (target: any, key: string): void {
    propertyMapper(target, key, (next: boolean) => {
      if (next !== true && next !== false) {
        throw new Error(`\x1b[91mValidation Error:\x1b[39m on ${target}[${key}] - should be Boolean`);
      } else {
        return next;
      }
    });
  };
}
