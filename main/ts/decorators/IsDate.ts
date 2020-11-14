import propertyMapper from '../helpers/propertyMapper';

export default function IsDate() {
  // eslint-disable-next-line func-names
  return function (target: any, key: string): void {
    propertyMapper(target, key, (next: string) => {
      if (Number.isNaN(new Date(next).getDate())) {
        throw new Error(`\x1b[91mValidation Error:\x1b[39m on ${target}[${key}] - invalid date format`);
      } else {
        return next;
      }
    });
  };
}
