const formGroup = <HTMLDivElement>document.getElementById('form-group');

const p = document.createElement('p');
p.innerText = 'vigenere';

export const addInputELement = () => {
    formGroup.append(p);
}

export const removeInputElement = () => {
    formGroup.removeChild(p);
}
