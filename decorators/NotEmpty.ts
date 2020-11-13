export default function NotEmpty() {
  return function (target: any, key: string): void {
    let value: string = target[key];
    const setter = (next: string) => {
      if (!next.length) {
        // eslint-disable-next-line no-console
        console.log(`V\x1b[91mIncoming object validation Error:\x1b[39m property: "${key}" - should have length > 0`);
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
