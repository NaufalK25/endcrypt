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

type ButtonCreationOptions = {
    name: string;
    tab: string;
    classes: string | string[];
    icon: string;
    type: string;
};

export const createButton = ({ name, tab, classes, icon, type }: ButtonCreationOptions) => {
    const button = document.createElement('button');
    button.type = type;
    button.id = `${name}-${tab}`;
    button.title = name;
    button.classList.add(...(Array.isArray(classes) ? classes : [classes]));
    button.setAttribute('data-btn-type', name);
    button.innerHTML = icon;
    return button;
};
