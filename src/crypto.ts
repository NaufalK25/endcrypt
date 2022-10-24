import caesarCrypto from './process/caesar';

const cryptoTypeInput = <HTMLInputElement>document.getElementById('crypto-type');

type CryptoAction = () => void;

const CRYPTOS: { [key: string]: CryptoAction } = {
    caesar: caesarCrypto
};

export default () => {
    const cryptoType = cryptoTypeInput.value;

    CRYPTOS[cryptoType]();
}

