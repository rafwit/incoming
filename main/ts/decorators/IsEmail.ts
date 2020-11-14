import propertyMapper from '../helpers/propertyMapper';

export default function IsEmail() {
  // eslint-disable-next-line func-names
  return function (target: any, key: string): void {
    propertyMapper(target, key, (next: string) => {
      const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if (!regex.test(next)) {
        // eslint-disable-next-line no-console
        console.log(`\x1b[91mIncoming object validation Error:\x1b[39m property: "${key}" - recevied: "${next}" - expected: "example@email.com"`);
      } else {
        return next;
      }
    });
  };
}
