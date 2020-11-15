import propertyMapper from '../helpers/propertyMapper';

export default function IsLength(min: number, max: number) {
  // eslint-disable-next-line func-names
  return function (target: any, key: string): void {
    propertyMapper(target, key, (next: string) => {
      if (next.length < min || next.length > max) {
        throw new Error(`\x1b[91mValidation Error:\x1b[39m on ${target}[${key}] - value has length: ${next.length} - should have min: ${min} and max: ${max} length`);
      } else {
        return next;
      }
    });
  };
}
