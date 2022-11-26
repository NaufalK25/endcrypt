import Crypto from './Crypto';

export default class RC4 extends Crypto {
    protected key: string;

    constructor(text: string = '', key: string = '') {
        super(text);
        this.key = key;
    }

    setKey(key: string) {
        this.key = key;
        return this;
    }

    setProps(text: string, key: string) {
        this.setText(text).setKey(key);
        return this;
    }

    encrypt() {
        let s = [];
        let j = 0;
        let x;
        let res = '';
        for (let i = 0; i < 256; i++) {
            s[i] = i;
        }

        for (let i = 0; i < 256; i++) {
            j = (j + s[i] + this.key.charCodeAt(i % this.key.length)) % 256;
            x = s[i];
            s[i] = s[j];
            s[j] = x;
        }

        let i = 0;
        for (let y = 0; y < this.text.length; y++) {
            i = (i + 1) % 256;
            j = (j + s[i]) % 256;
            x = s[i];
            s[i] = s[j];
            s[j] = x;
            res += String.fromCharCode(this.text.charCodeAt(y) ^ s[(s[i] + s[j]) % 256]);
        }
        return res;
    }

    decrypt() {
        return this.encrypt();
    }
}
