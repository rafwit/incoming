import propertyMapper from '../helpers/propertyMapper';

export default function Equals(value: string) {
    return function (target: any, key: string): void {
        propertyMapper(target, key, (next: string) => {
            if (next !== value) {
                throw new Error(`\x1b[91mValidation Error:\x1b[39m on ${target}[${key}] - value schould equal "${value}"`);
            } else return next;
        });
    };
}