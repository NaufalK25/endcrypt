import caesarCrypto from './process/caesar';
import vigenereCrypto from './process/vigenere';
import railFenceCrypto from './process/rail-fence';

const cryptoTypeInput = <HTMLInputElement>document.getElementById('crypto-type');

type CryptoViewAction = () => void;

const CRYPTOS: { [key: string]: CryptoViewAction } = {
    caesar: caesarCrypto,
    vigenere: vigenereCrypto,
    'rail-fence': railFenceCrypto
};

export default () => {
    const cryptoType = cryptoTypeInput.value;

    CRYPTOS[cryptoType]();
};
