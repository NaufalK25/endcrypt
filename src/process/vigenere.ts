import Vigenere from '../crypto/Vigenere';

export default () => {
    const encryptTextInput = <HTMLInputElement>document.getElementById('encrypt-text');
    const decryptTextInput = <HTMLInputElement>document.getElementById('decrypt-text');
    const keyInput = <HTMLInputElement>document.getElementById('key');
    const encryptButton = <HTMLButtonElement>document.getElementById('encrypt-vigenere');
    const decryptButton = <HTMLButtonElement>document.getElementById('decrypt-vigenere');
    const clearButton = <HTMLButtonElement>document.getElementById('clear-vigenere');

    const vigenere = new Vigenere();

    encryptButton.addEventListener('click', () => {
        const encryptedText = vigenere.setProps(encryptTextInput?.value, keyInput?.value).encrypt();
        decryptTextInput.value = encryptedText;
    });

    decryptButton.addEventListener('click', () => {
        const decryptedText = vigenere.setProps(decryptTextInput?.value, keyInput?.value).decrypt();
        encryptTextInput.value = decryptedText;
    });

    clearButton.addEventListener('click', () => {
        encryptTextInput.value = '';
        decryptTextInput.value = '';
        keyInput.value = '';
    });
};
