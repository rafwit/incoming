export default function IsDate() {
  return function (target: any, key: string): void {
    let value: string = target[key];
    const setter = (next: string) => {
      if (Number.isNaN(new Date(next).getDate())) {
        // eslint-disable-next-line no-console
        console.log(`Validation Error on property: "${key}" - invalid date format`);
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
