import propertyMapper from '../helpers/propertyMapper';

export default function MinLength(min: number) {
  return function (target: any, key: string): void {
    propertyMapper(target, key, (next: string) => {
      if (next.length < min) {
        throw new Error(`\x1b[91mValidation Error:\x1b[39m on ${target}[${key}] - value has length: ${next.length} - should have min length ${min}`);
      } else {
        return next;
      }
    });
  };
}