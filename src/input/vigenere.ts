const formGroup = <HTMLDivElement>document.getElementById('form-group');

const keyInputGroup = document.createElement('section');
keyInputGroup.classList.add('input-group');

const keyLabel = document.createElement('label');
keyLabel.htmlFor = 'key';
keyLabel.innerText = 'Key: ';

const keyInput = document.createElement('input');
keyInput.type = 'text';
keyInput.name = 'key';
keyInput.id = 'key';
keyInput.placeholder = 'key';

keyInput.addEventListener('keydown', e => {
    if (e.key.match(/[0-9]/)) {
        e.preventDefault();
    }
});

keyInputGroup.append(keyLabel, keyInput);

const encryptTextInputGroup = document.createElement('section');
encryptTextInputGroup.classList.add('input-group');

const encryptTextLabel = document.createElement('label');
encryptTextLabel.htmlFor = 'encrypt-text';
encryptTextLabel.innerText = 'Encrypt Text: ';

const encryptTextInput = document.createElement('input');
encryptTextInput.type = 'text';
encryptTextInput.name = 'encrypt-text';
encryptTextInput.id = 'encrypt-text';
encryptTextInput.placeholder = 'abc';

encryptTextInputGroup.append(encryptTextLabel, encryptTextInput);

const decryptTextInputGroup = document.createElement('section');
decryptTextInputGroup.classList.add('input-group');

const decryptTextLabel = document.createElement('label');
decryptTextLabel.htmlFor = 'decrypt-text';
decryptTextLabel.innerText = 'Decrypt Text: ';

const decryptTextInput = document.createElement('input');
decryptTextInput.type = 'text';
decryptTextInput.name = 'decrypt-text';
decryptTextInput.id = 'decrypt-text';
decryptTextInput.placeholder = 'kfa';

decryptTextInputGroup.append(decryptTextLabel, decryptTextInput);

export const addInputElement = () => {
    formGroup.append(keyInputGroup, encryptTextInputGroup, decryptTextInputGroup);
};

export const removeInputElement = () => {
    encryptTextInput.value = '';
    decryptTextInput.value = '';
    keyInput.value = '';

    keyInput.removeEventListener('keydown', e => {
        if (e.key.match(/[0-9]/)) {
            e.preventDefault();
        }
    });

    formGroup.removeChild(keyInputGroup);
    formGroup.removeChild(encryptTextInputGroup);
    formGroup.removeChild(decryptTextInputGroup);
};
