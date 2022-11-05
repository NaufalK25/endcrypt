export const alphaToNum = (char: string) => {
    return char.toLowerCase().charCodeAt(0) - 97;
};

export const numToAlpha = (num: number) => {
    return String.fromCharCode(num + 97);
};

export const getActiveTab = (tab: string | null) => {
    if (tab === null) {
        tab = 'caesar';
        localStorage.setItem('tab', tab);
    }
    return tab;
};
