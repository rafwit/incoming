// this function is crucial for making sure that properties annotated with all decorators
// will be enumerable on target class instance and allows use of multiple decorators

export default function propertyMapper<T>(prototype: Object, key: string, mapper: (value: any) => T) {
  const values = new Map<any, T>();
  const keyDescriptor = Object.getOwnPropertyDescriptor(prototype, key);
  const pervSet = keyDescriptor && keyDescriptor.set;
  Object.defineProperty(prototype, key, {
    set(firstValue: any) {
      Object.defineProperty(this, key, {
        get() {
          return values.get(this);
        },
        set(value: any) {
          pervSet && pervSet.call({}, firstValue);
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
