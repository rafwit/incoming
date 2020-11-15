import propertyMapper from '../helpers/propertyMapper';

export default function IsArray() {
    return function (target: any, key: string): void {
        propertyMapper(target, key, (next: string) => {
            if (!Array.isArray(next)) {
                throw new Error(`\x1b[91mValidation failed on property: "${key}"\x1b[39m \x1b[93m - expected array, received ${typeof next}: ${next}\x1b[39m`);
            } else return next;
        });
    };
}