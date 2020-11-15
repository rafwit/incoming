import propertyMapper from '../helpers/propertyMapper';

export default function IsUpperCase() {
	return function (target: any, key: string): void {
    propertyMapper(target, key, (next: string) => {
        if (typeof next !== 'string') {
            throw new Error(`\x1b[91mValidation failed on property: "${key}"\x1b[39m\x1b[93m - expected string, received value of type: ${typeof next}\x1b[39m`)
            }
        if (next.toUpperCase() !== next) {
            throw new Error(`\x1b[91mValidation failed on property: "${key}"\x1b[39m\x1b[93m - expected all upper case, received ${typeof next}: ${next}\x1b[39m`);
        }
        else return next;
    });
};
}