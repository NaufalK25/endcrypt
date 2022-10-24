import {
    addInputELement as addCaesarInputElement,
    removeInputElement as removeCaesarInputElement
} from './input/caesar';
import {
    addInputELement as addvigenereInputElement,
    removeInputElement as removevigenereInputElement
} from './input/vigenere';
import {
    addInputELement as addRailFenceInputElement,
    removeInputElement as removeRailFenceInputElement
} from './input/rail-fence';
import {
    addInputELement as addPlayFairInputElement,
    removeInputElement as removePlayFairInputElement
} from './input/play-fair';

type InputElement = () => void;
type AddInputElement = InputElement;
type RemoveInputElement = InputElement;

export const ADD_INPUT_ELEMENTS: { [key: string]: AddInputElement } = {
    caesar: addCaesarInputElement,
    vigenere: addvigenereInputElement,
    'rail-fence': addRailFenceInputElement,
    'play-fair': addPlayFairInputElement
};

export const REMOVE_INPUT_ELEMENTS: { [key: string]: RemoveInputElement } = {
    caesar: removeCaesarInputElement,
    vigenere: removevigenereInputElement,
    'rail-fence': removeRailFenceInputElement,
    'play-fair': removePlayFairInputElement
};

