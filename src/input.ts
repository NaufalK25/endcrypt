import { addInputElement as addCaesarInputElement, removeInputElement as removeCaesarInputElement } from './input/caesar';
import { addInputElement as addvigenereInputElement, removeInputElement as removevigenereInputElement } from './input/vigenere';
import { addInputElement as addRC4InputElement, removeInputElement as removeRC4InputElement } from './input/rc4';

type InputElement = () => void;
type AddInputElement = InputElement;
type RemoveInputElement = InputElement;

export const ADD_INPUT_ELEMENTS: { [key: string]: AddInputElement } = {
    caesar: addCaesarInputElement,
    vigenere: addvigenereInputElement,
    rc4: addRC4InputElement
};

export const REMOVE_INPUT_ELEMENTS: { [key: string]: RemoveInputElement } = {
    caesar: removeCaesarInputElement,
    vigenere: removevigenereInputElement,
    rc4: removeRC4InputElement
};
