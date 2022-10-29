import {
    addButtonELement as addCaesarButtonElement,
    removeButtonElement as removeCaesarButtonElement
} from './button/caesar';
import {
    addButtonELement as addvigenereButtonElement,
    removeButtonElement as removevigenereButtonElement
} from './button/vigenere';

type ButtonElementAction = { [key: string]: () => void };

export const ADD_BUTTON_ELEMENTS: ButtonElementAction = {
    caesar: addCaesarButtonElement,
    vigenere: addvigenereButtonElement,
};

export const REMOVE_BUTTON_ELEMENTS: ButtonElementAction = {
    caesar: removeCaesarButtonElement,
    vigenere: removevigenereButtonElement,
};

