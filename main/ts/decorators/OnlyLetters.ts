
import propertyMapper from '../helpers/propertyMapper';

export default function OnlyLetters() {
  return function (target: any, key: string): void {
    propertyMapper(target, key, (next: string) => {
      const regex = /^[a-zA-Z]+$/;
      if (!regex.test(next)) {
        throw new Error(`\x1b[91mValidation Error:\x1b[39m on ${target}[${key}] - recevied value: ${next} - expected only letters`);
      } else {
        return next;
      }
    });
  };
}
