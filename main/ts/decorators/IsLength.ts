import propertyMapper from '../helpers/propertyMapper';

export default function IsLength(min: number, max: number) {
  // eslint-disable-next-line func-names
  return function (target: any, key: string): void {
    propertyMapper(target, key, (next: string) => {
      if (next.length < min || next.length > max) {
        // eslint-disable-next-line no-console
        console.log(`\x1b[91mIncoming object validation Error:\x1b[39m property: "${key}" - has length: ${next.length} - should have min: ${min} and max: ${max} length`);
      } else {
        return next;
      }
    });
  };
}
