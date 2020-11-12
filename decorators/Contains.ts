export default function Contains(word: string) {
  return function (target: any, key: string): void {
    let value: string = target[key];
    const setter = (next: string) => {
      if (!next.includes(word)) {
        // eslint-disable-next-line no-console
        console.log(`Validation Error on property: "${key}" - should contain "${word}"`);
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
