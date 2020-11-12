export default function IsBoolean() {
  return function (target: any, key: string): void {
    let value: string = target[key];
    const setter = (next: string) => {
      if (next !== 'true' && next !== 'false') {
        // eslint-disable-next-line no-console
        console.log(`Validation Error on property: "${key}" - should be Boolean`);
      } else {
        value = next;
      }
    };
    Object.defineProperty(target, key, {
      get: () => value,
      set: setter,
    });
  };
}
