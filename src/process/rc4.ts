import RC4 from '../crypto/RC4';

export default () => {
    const encryptTextInput = <HTMLInputElement>document.getElementById('encrypt-text');
    const decryptTextInput = <HTMLInputElement>document.getElementById('decrypt-text');
    const keyInput = <HTMLInputElement>document.getElementById('key');
    const encryptButton = <HTMLButtonElement>document.getElementById('encrypt-rc4');
    const decryptButton = <HTMLButtonElement>document.getElementById('decrypt-rc4');
    const clearButton = <HTMLButtonElement>document.getElementById('clear-rc4');

    const rc4 = new RC4();

    encryptButton.addEventListener('click', () => {
        const encryptedText = rc4.setProps(encryptTextInput?.value, keyInput?.value).encrypt();
        decryptTextInput.value = encryptedText;
    });

    decryptButton.addEventListener('click', () => {
        const decryptedText = rc4.setProps(decryptTextInput?.value, keyInput?.value).decrypt();
        encryptTextInput.value = decryptedText;
    });

    clearButton.addEventListener('click', () => {
        encryptTextInput.value = '';
        decryptTextInput.value = '';
        keyInput.value = '';
    });
};
