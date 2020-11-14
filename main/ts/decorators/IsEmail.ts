import propertyMapper from '../helpers/propertyMapper';

export default function IsEmail() {
  // eslint-disable-next-line func-names
  return function (target: any, key: string): void {
    propertyMapper(target, key, (next: string) => {
      const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if (!regex.test(next)) {
        throw new Error(`\x1b[91mValidation Error:\x1b[39m on ${target}[${key}] - recevied: "${next}" - expected format: "example@email.com"`);
      } else {
        return next;
      }
    });
  };
}
