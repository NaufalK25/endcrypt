import Crypto from './Crypto';
import { alphaToNum, numToAlpha } from '../helper';

export default class Caesar extends Crypto {
    protected offset: number;
    public static MAX_KEY_LENGTH = 26;

    constructor(text: string = '', offset: number = 0) {
        super(text);
        this.offset = offset;
    }

    setOffset(offset: number) {
        this.offset = offset;
        return this;
    }

    setProps(text: string, offset: number) {
        return this.setText(text).setOffset(offset);
    }

    filterOffset() {
        if (this.offset < 0) {
            this.offset += Caesar.MAX_KEY_LENGTH * Math.ceil(Math.abs(this.offset) / Caesar.MAX_KEY_LENGTH);
        }
    }

    encrypt() {
        this.filterOffset();

        return this.text
            .split('')
            .map(char => {
                if (char.match(/[a-z]/i)) {
                    return numToAlpha((alphaToNum(char) + this.offset) % Caesar.MAX_KEY_LENGTH);
                }
                return char;
            })
            .join('');
    }

    decrypt() {
        this.filterOffset();

        return this.text
            .split('')
            .map(char => {
                if (char.match(/[a-z]/i)) {
                    let num = alphaToNum(char) - this.offset;

                    while (num < 0) {
                        num += Caesar.MAX_KEY_LENGTH;
                    }

                    return numToAlpha(num % Caesar.MAX_KEY_LENGTH);
                }
                return char;
            })
            .join('');
    }
}
