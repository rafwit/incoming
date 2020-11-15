import propertyMapper from '../helpers/propertyMapper';

export default function IsEmail() {
  return function (target: any, key: string): void {
    propertyMapper(target, key, (next: string) => {
      if (typeof next !== 'string') {
        throw new Error(`\x1b[91mValidation failed on property: "${key}"\x1b[39m\x1b[93m - expected string, received value of type: ${typeof next}\x1b[39m`)
        }
      const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if (!regex.test(next)) {
        throw new Error(`\x1b[91mValidation Error:\x1b[39m on ${target}[${key}] - recevied: "${next}" - expected format: "example@email.com"`);
      } else return next;
    });
  };
}
