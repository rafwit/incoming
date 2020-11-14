import propertyMapper from '../helpers/propertyMapper';

export default function NotEmpty() {
  // eslint-disable-next-line func-names
  return function (target: any, key: string): void {
    propertyMapper(target, key, (next: string) => {
      if (!next.length) {
        throw new Error(`\x1b[91mValidation Error:\x1b[39m on ${target}[${key}] - should have length > 0`);
      } else {
        return next;
      }
    });
  };
}
