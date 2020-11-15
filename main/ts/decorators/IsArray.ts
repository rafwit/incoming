import propertyMapper from '../helpers/propertyMapper';

export default function IsArray() {
    return function (target: any, key: string): void {
        propertyMapper(target, key, (next: string) => {
            if (!Array.isArray(next)) {
                throw new Error(`\x1b[91mValidation Error:\x1b[39m on ${target}[${key}] - expected Array, received ${next}`);
            } else return next;
        });
    };
}