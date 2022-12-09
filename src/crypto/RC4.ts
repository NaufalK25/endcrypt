import Crypto from './Crypto';

export default class RC4 extends Crypto {
    protected key: string;
    public static MAX_KEY_LENGTH = 256;

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

    encrypt() {
        const state: number[] = [];
        let idxKey = 0;
        let idxState: number;
        let res = '';

        for (let i = 0; i < RC4.MAX_KEY_LENGTH; i++) {
            state[i] = i;
        }

        for (let i = 0; i < RC4.MAX_KEY_LENGTH; i++) {
            idxKey = (idxKey + state[i] + this.key.charCodeAt(i % this.key.length)) % RC4.MAX_KEY_LENGTH;
            idxState = state[i];
            state[i] = state[idxKey];
            state[idxKey] = idxState;
        }

        let i = 0;
        for (let y = 0; y < this.text.length; y++) {
            i = (i + 1) % RC4.MAX_KEY_LENGTH;
            idxKey = (idxKey + state[i]) % RC4.MAX_KEY_LENGTH;
            idxState = state[i];
            state[i] = state[idxKey];
            state[idxKey] = idxState;
            res += String.fromCharCode(this.text.charCodeAt(y) ^ state[(state[i] + state[idxKey]) % RC4.MAX_KEY_LENGTH]);
        }

        return res;
    }

    decrypt() {
        return this.encrypt();
    }
}
