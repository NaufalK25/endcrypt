import Crypto from './Crypto';

export default class RailFence extends Crypto {
    protected key: number;
    protected offset: number;

    constructor(text: string = '', key: number = 1, offset: number = 1) {
        super(text);
        this.key = key;
        this.offset = offset;
    }

    setKey(key: number) {
        this.key = key;
    }

    setOffset(offset: number) {
        this.offset = offset;
    }

    setProps(text: string, key: number, offset: number) {
        this.setText(text);
        this.setKey(key);
        this.setOffset(offset);
    }

    encrypt() {
        return '';
    }

    decrypt() {
        return '';
    }
}
