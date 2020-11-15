import propertyMapper from '../helpers/propertyMapper';

export default function IsNumber() {
  // eslint-disable-next-line func-names
  return function (target: any, key: string): void {
    propertyMapper(target, key, (next: number) => {
      if (typeof next !== 'number') {
        throw new Error(`\x1b[91mValidation Error:\x1b[39m on ${target}[${key}] - should be of type Number`);
      } else {
        return next;
      }
    });
  };
}
