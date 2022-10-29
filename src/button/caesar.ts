import { createButton } from '../helper';

const buttonGroup = <HTMLDivElement>document.getElementById('button-group');

const encrypt = createButton({
    name: 'encrypt',
    tab: 'caesar',
    classes: 'btn',
    icon: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" width="24" height=24>
            <path stroke-linecap="round" stroke-linejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
        </svg>
    `,
    type: 'button'
});

const decrypt = createButton({
    name: 'decrypt',
    tab: 'caesar',
    classes: 'btn',
    icon: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" width="24" height="24">
            <path stroke-linecap="round" stroke-linejoin="round"
                d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
        </svg>
    `,
    type: 'button'
});

const clear = createButton({
    name: 'clear',
    tab: 'caesar',
    classes: 'btn',
    icon: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" width="24" height="24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    `,
    type: 'button'
});

export const addButtonELement = () => {
    buttonGroup.append(encrypt, decrypt, clear);
}

export const removeButtonElement = () => {
    buttonGroup.removeChild(encrypt);
    buttonGroup.removeChild(decrypt);
    buttonGroup.removeChild(clear);
}
