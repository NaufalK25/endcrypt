import Crypto from './Crypto';
import { alphaToNum, numToAlpha } from '../helper';

export default class Caesar extends Crypto {
    protected offset: number;

    constructor(text: string = '', offset: number = 0) {
        super(text);
        this.offset = offset;
    }

    setOffset(offset: number) {
        this.offset = offset;
    }

    setProps(text: string, offset: number) {
        this.setText(text);
        this.setOffset(offset);
    }

    encrypt() {
        if (this.offset < 0) {
            this.offset += 26 * Math.ceil(Math.abs(this.offset) / 26);
        }

        let encryptedText = this.text.split('').map((char) => {
            if (char.match(/[a-z]/i)) {
                return numToAlpha((alphaToNum(char) + this.offset) % 26);
            }
            return char;
        });
        return encryptedText.join('');
    }

    decrypt() {
        if (this.offset < 0) {
            this.offset += 26 * Math.ceil(Math.abs(this.offset) / 26);
        }

        let decryptedText = this.text.split('').map((char) => {
            if (char.match(/[a-z]/i)) {
                let num = alphaToNum(char) - this.offset;

                while (num < 0) {
                    num += 26;
                }

                return numToAlpha(num % 26);
            }
            return char;
        });
        return decryptedText.join('');
    }
}
