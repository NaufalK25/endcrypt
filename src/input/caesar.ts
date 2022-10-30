const formGroup = <HTMLDivElement>document.getElementById('form-group');

const offsetInputGroup = document.createElement('section');
offsetInputGroup.classList.add('input-group');

const offsetLabel = document.createElement('label');
offsetLabel.htmlFor = 'offset';
offsetLabel.innerText = 'Offset: ';

const offsetInput = document.createElement('input');
offsetInput.type = 'number';
offsetInput.name = 'offset';
offsetInput.id = 'offset';
offsetInput.placeholder = '1';

offsetInputGroup.append(offsetLabel, offsetInput);

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
decryptTextInput.placeholder = 'bcd';

decryptTextInputGroup.append(decryptTextLabel, decryptTextInput);

export const addInputELement = () => {
    formGroup.append(offsetInputGroup, encryptTextInputGroup, decryptTextInputGroup);
};

export const removeInputElement = () => {
    encryptTextInput.value = '';
    decryptTextInput.value = '';
    offsetInput.value = '';

    formGroup.removeChild(offsetInputGroup);
    formGroup.removeChild(encryptTextInputGroup);
    formGroup.removeChild(decryptTextInputGroup);
};
