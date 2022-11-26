import caesarCrypto from './process/caesar';
import vigenereCrypto from './process/vigenere';
import rc4CCrypto from './process/rc4';

const cryptoTypeInput = <HTMLInputElement>document.getElementById('crypto-type');

type CryptoViewAction = () => void;

const CRYPTOS: { [key: string]: CryptoViewAction } = {
    caesar: caesarCrypto,
    vigenere: vigenereCrypto,
    rc4: rc4CCrypto
};

export default () => {
    const cryptoType = cryptoTypeInput.value;

    CRYPTOS[cryptoType]();
};
