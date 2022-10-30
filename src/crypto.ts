import caesarCrypto from './process/caesar';
import vigenereCrypto from './process/vigenere';

const cryptoTypeInput = <HTMLInputElement>document.getElementById('crypto-type');

type CryptoViewAction = () => void;

const CRYPTOS: { [key: string]: CryptoViewAction } = {
    caesar: caesarCrypto,
    vigenere: vigenereCrypto
};

export default () => {
    const cryptoType = cryptoTypeInput.value;

    CRYPTOS[cryptoType]();
};
