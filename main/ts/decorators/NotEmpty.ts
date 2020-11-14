import propertyMapper from '../helpers/propertyMapper';

export default function NotEmpty() {
  // eslint-disable-next-line func-names
  return function (target: any, key: string): void {
    propertyMapper(target, key, (next: string) => {
      if (!next.length) {
        // eslint-disable-next-line no-console
        console.log(`V\x1b[91mIncoming object validation Error:\x1b[39m property: "${key}" - should have length > 0`);
      } else {
        return next;
      }
    });
  };
}
