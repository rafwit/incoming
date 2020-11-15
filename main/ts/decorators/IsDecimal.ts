import propertyMapper from '../helpers/propertyMapper';

export default function IsDecimal() {
    return function (target: any, key: string): void {
        propertyMapper(target, key, (next: number) => {
            if (!Number.isInteger(next)) {
                throw new Error(`\x1b[91mValidation Error:\x1b[39m on ${target}[${key}] - expected decimal number, received ${next}`);
            } else return next;
        });
    };
}