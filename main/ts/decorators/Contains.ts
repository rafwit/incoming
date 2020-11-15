import propertyMapper from '../helpers/propertyMapper';

export default function Contains(word: string) {
  return function (target: any, key: string): void {
    propertyMapper(target, key, (next: string) => {
      if (typeof next !== 'string') {
        throw new Error(`\x1b[91mValidation failed on property: "${key}"\x1b[39m\x1b[93m - expected string, received value of type: ${typeof next}\x1b[39m`)
      }
      if (!next.includes(word)) {
        throw new Error(`\x1b[91mValidation failed on property: "${key}"\x1b[39m\x1b[93m - value should contain string: ${word}\x1b[39m`);
      } else return next;
    });
  };
}
