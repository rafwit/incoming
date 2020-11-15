import propertyMapper from '../helpers/propertyMapper';

export default function IsLowerCase() {
    return function (target: any, key: string): void {
        propertyMapper(target, key, (next: string) => {
            if (next !== next.toLowerCase()) {
                throw new Error(`\x1b[91mValidation Error:\x1b[39m on ${target}[${key}] - expected all upper case, received ${next}`);
            } else return next;
        });
    };
}