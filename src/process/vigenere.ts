import Vigenere from '../crypto/Vigenere';

export default () => {
    const encryptTextInput = <HTMLInputElement>document.getElementById('encrypt-text');
    const decryptTextInput = <HTMLInputElement>document.getElementById('decrypt-text');
    const keyInput = <HTMLInputElement>document.getElementById('key');
    const encryptButton = <HTMLButtonElement>document.getElementById('encrypt');
    const decryptButton = <HTMLButtonElement>document.getElementById('decrypt');
    const clearButton = <HTMLButtonElement>document.getElementById('clear');

    const vigenere = new Vigenere();

    encryptButton.addEventListener('click', () => {
        vigenere.setProps(encryptTextInput?.value, keyInput?.value);
        const encryptedText = vigenere.encrypt();
        decryptTextInput.value = encryptedText;
    });

    decryptButton.addEventListener('click', () => {
        vigenere.setProps(decryptTextInput?.value, keyInput?.value);
        const decryptedText = vigenere.decrypt();
        encryptTextInput.value = decryptedText;
    });

    clearButton.addEventListener('click', () => {
        encryptTextInput.value = '';
        decryptTextInput.value = '';
        keyInput.value = '';
    });
}
