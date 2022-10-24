export default abstract class Crypto {
    protected text: string;

    constructor(text: string = '') {
        this.text = text;
    }

    setText(text: string) {
        this.text = text;
    }

    abstract encrypt(): string;
    abstract decrypt(): string;
}
