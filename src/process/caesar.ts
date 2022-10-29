import Caesar from '../crypto/Caesar';

export default () => {
    const encryptTextInput = <HTMLInputElement>document.getElementById('encrypt-text');
    const decryptTextInput = <HTMLInputElement>document.getElementById('decrypt-text');
    const offsetInput = <HTMLInputElement>document.getElementById('offset');
    const encryptButton = <HTMLButtonElement>document.getElementById('encrypt-caesar');
    const decryptButton = <HTMLButtonElement>document.getElementById('decrypt-caesar');
    const clearButton = <HTMLButtonElement>document.getElementById('clear-caesar');

    const caesar = new Caesar();

    encryptButton.addEventListener('click', () => {
        caesar.setProps(encryptTextInput?.value, +offsetInput?.value);
        const encryptedText = caesar.encrypt();
        decryptTextInput.value = encryptedText;
    });

    decryptButton.addEventListener('click', () => {
        caesar.setProps(decryptTextInput?.value, +offsetInput?.value);
        const decryptedText = caesar.decrypt();
        encryptTextInput.value = decryptedText;
    });

    clearButton.addEventListener('click', () => {
        encryptTextInput.value = '';
        decryptTextInput.value = '';
        offsetInput.value = '';
    });
}
