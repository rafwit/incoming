/* eslint-disable */
import propertyMapper from '../helpers/propertyMapper';

export default function Contains(word: string) {
  // eslint-disable-next-line func-names
  return function (target: any, key: string): void {
    propertyMapper(target, key, (next: string) => {
      if (!next.includes(word)) {
        // eslint-disable-next-line no-console
        console.log(`V\x1b[91mIncoming object validation Error:\x1b[39m property: "${key}" - should contain "${word}"`);
      } else return next;
    });
  };
}
