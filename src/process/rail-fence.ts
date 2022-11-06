import RailFence from '../crypto/RailFence';

export default () => {
    const encryptTextInput = <HTMLInputElement>document.getElementById('encrypt-text');
    const decryptTextInput = <HTMLInputElement>document.getElementById('decrypt-text');
    const keyInput = <HTMLInputElement>document.getElementById('key');
    const offsetInput = <HTMLInputElement>document.getElementById('offset');
    const encryptButton = <HTMLButtonElement>document.getElementById('encrypt-rail-fence');
    const decryptButton = <HTMLButtonElement>document.getElementById('decrypt-rail-fence');
    const clearButton = <HTMLButtonElement>document.getElementById('clear-rail-fence');

    const railFence = new RailFence();

    encryptButton.addEventListener('click', () => {
        railFence.setProps(encryptTextInput?.value, +keyInput?.value, +offsetInput?.value);
        const encryptedText = railFence.encrypt();
        decryptTextInput.value = encryptedText;
    });

    decryptButton.addEventListener('click', () => {
        railFence.setProps(decryptTextInput?.value, +keyInput?.value, +offsetInput?.value);
        const decryptedText = railFence.decrypt();
        encryptTextInput.value = decryptedText;
    });

    clearButton.addEventListener('click', () => {
        encryptTextInput.value = '';
        decryptTextInput.value = '';
        keyInput.value = '';
        offsetInput.value = '';
    });
};
