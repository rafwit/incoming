export default function IsLength(min: number, max: number) {
  // eslint-disable-next-line func-names
  return function (target: any, key: string): void {
    let value: string = target[key];
    const setter = (next: string) => {
      if (next.length < min || next.length > max) {
        // eslint-disable-next-line no-console
        console.log(`Validation Error on property: "${key}" - has length: ${next.length} - should have min: ${min} and max: ${max} length`);
      } else {
        value = next;
      }
    };

    Object.defineProperty(target, key, {
      get: () => value,
      set: setter,
      enumerable: true,
    });
  };
}
