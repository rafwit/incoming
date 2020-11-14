// this function is crucial for making sure that properties annotated with all decorators
// will be enumerable on target class instance

// eslint-disable-next-line no-unused-vars
export default function propertyMapper<T>(prototype: any, key: string, mapper: (value: any) => T) {
  const values = new Map<any, T>();
  Object.defineProperty(prototype, key, {
    set(firstValue: any) {
      Object.defineProperty(this, key, {
        get() {
          return values.get(this);
        },
        set(value: any) {
          values.set(this, mapper(value));
        },
        enumerable: true,
      });
      this[key] = firstValue;
    },
    enumerable: true,
    configurable: true,
  });
}
