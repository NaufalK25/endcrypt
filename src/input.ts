import { addInputElement as addCaesarInputElement, removeInputElement as removeCaesarInputElement } from './input/caesar';
import { addInputElement as addvigenereInputElement, removeInputElement as removevigenereInputElement } from './input/vigenere';
import { addInputElement as addRailFenceInputElement, removeInputElement as removeRailFenceInputElement } from './input/rail-fence';

type InputElement = () => void;
type AddInputElement = InputElement;
type RemoveInputElement = InputElement;

export const ADD_INPUT_ELEMENTS: { [key: string]: AddInputElement } = {
    caesar: addCaesarInputElement,
    vigenere: addvigenereInputElement,
    'rail-fence': addRailFenceInputElement
};

export const REMOVE_INPUT_ELEMENTS: { [key: string]: RemoveInputElement } = {
    caesar: removeCaesarInputElement,
    vigenere: removevigenereInputElement,
    'rail-fence': removeRailFenceInputElement
};
