import Crypto from './Crypto';
import { alphaToNum, numToAlpha } from '../helper';

export default class Vigenere extends Crypto {
    protected key: string;

    constructor(text: string = '', key: string = '') {
        super(text);
        this.key = key;
    }

    setKey(key: string) {
        this.key = key;
    }

    setProps(text: string, key: string) {
        this.setText(text);
        this.setKey(key);
    }

    getKey() {
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

    encrypt() {
        this.getKey();

        const encryptedText = this.text
            .split('')
            .reduce((acc, char, index) => {
                if (char.match(/[a-z]/i)) {
                    const encryptedChar = numToAlpha((alphaToNum(this.key[index]) + alphaToNum(char)) % 26);
                    acc.push(encryptedChar);
                } else {
                    acc.push(char);
                }
                return acc;
            }, [] as string[])
            .join('');

        return encryptedText;
    }

    decrypt() {
        this.getKey();

        const decryptedText = this.text
            .split('')
            .reduce((acc, char, index) => {
                if (char.match(/[a-z]/i)) {
                    const decryptedChar = numToAlpha((alphaToNum(char) - alphaToNum(this.key[index]) + 26) % 26);
                    acc.push(decryptedChar);
                } else {
                    acc.push(char);
                }
                return acc;
            }, [] as string[])
            .join('');

        return decryptedText;
    }
}
