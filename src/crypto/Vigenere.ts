import Crypto from './Crypto';
import { alphaToNum, numToAlpha } from '../helper';

export default class Vigenere extends Crypto {
    protected key: string;
    public static MAX_KEY_LENGTH = 26;

    constructor(text: string = '', key: string = '') {
        super(text);
        this.key = key;
    }

    setKey(key: string) {
        this.key = key;
        return this;
    }

    setProps(text: string, key: string) {
        return this.setText(text).setKey(key);
    }

    filterKey() {
        if (this.key.length > this.text.length) {
            this.key = this.key.slice(0, this.text.length);
        }

        if (this.key.length < this.text.length) {
            const spaceIndexes = this.text.split('').reduce((acc, char, index) => {
                if (char === ' ') {
                    acc.push(index);
                }
                return acc;
            }, [] as number[]);

            const tempKey = this.key.repeat(Math.ceil(this.text.length / this.key.length)).split('');
            for (const spaceIndex of spaceIndexes) {
                tempKey.splice(spaceIndex, 0, ' ');
            }
            tempKey.splice(this.text.length);
            this.key = tempKey.join('');
        }
    }

    crypto(operation: 'encrypt' | 'decrypt') {
        this.filterKey();

        return this.text
            .split('')
            .reduce((acc, char, index) => {
                if (char.match(/[a-z]/i)) {
                    const resChar = numToAlpha((operation === 'encrypt' ? alphaToNum(this.key[index]) + alphaToNum(char) : alphaToNum(char) - alphaToNum(this.key[index]) + Vigenere.MAX_KEY_LENGTH) % Vigenere.MAX_KEY_LENGTH);
                    acc.push(resChar);
                } else {
                    acc.push(char);
                }
                return acc;
            }, [] as string[])
            .join('');
    }

    encrypt() {
        return this.crypto('encrypt');
    }

    decrypt() {
        return this.crypto('decrypt');
    }
}
