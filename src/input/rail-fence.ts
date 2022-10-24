const formGroup = <HTMLDivElement>document.getElementById('form-group');

const p = document.createElement('p');
p.innerText = 'rail-fence';

export const addInputELement = () => {
    formGroup.append(p);
}

export const removeInputElement = () => {
    formGroup.removeChild(p);
}
