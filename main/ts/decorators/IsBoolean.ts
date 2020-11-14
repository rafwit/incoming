import propertyMapper from '../helpers/propertyMapper';

export default function IsBoolean() {
  // eslint-disable-next-line func-names
  return function (target: any, key: string): void {
    propertyMapper(target, key, (next: string) => {
      if (next !== 'true' && next !== 'false') {
        // eslint-disable-next-line no-console
        console.log(`\x1b[91mIncoming object validation Error:\x1b[39m property: "${key}" - should be Boolean`);
      } else {
        return next;
      }
    });
  };
}
