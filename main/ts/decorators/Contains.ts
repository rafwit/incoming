import propertyMapper from '../helpers/propertyMapper';

export default function Contains(word: string) {
    return function (target: any, key: string): void {
        propertyMapper(target, key, (next: string) => {
            if (!next.includes(word)) {
                throw new Error(`\x1b[91mValidation Error:\x1b[39m on ${target}[${key}] - should contain "${word}"`);
            } else return next;
        });
    };
}
