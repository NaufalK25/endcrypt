import { getActiveTab } from './helper';
import { ADD_INPUT_ELEMENTS, REMOVE_INPUT_ELEMENTS } from './input';
import { ADD_BUTTON_ELEMENTS, REMOVE_BUTTON_ELEMENTS } from './button';

const tabs = <HTMLDivElement>document.getElementById('tabs');
const tabButtons = tabs.querySelectorAll('button');
const cryptoTypeInput = <HTMLInputElement>document.getElementById('crypto-type');
const formGroup = <HTMLDivElement>document.getElementById('form-group');
const buttonGroup = <HTMLDivElement>document.getElementById('button-group');

const isFormExists = () => {
    return formGroup.hasChildNodes() && buttonGroup.hasChildNodes();
}

export default () => {
    let activeTab = getActiveTab(localStorage.getItem('tab'));

    if (!cryptoTypeInput.value) {
        cryptoTypeInput.value = activeTab;
    }

    if (!isFormExists()) {
        ADD_INPUT_ELEMENTS[activeTab]();
        ADD_BUTTON_ELEMENTS[activeTab]();
    }

    const activeTabButton = <HTMLButtonElement>document.getElementById(activeTab);
    activeTabButton.classList.add('active');

    tabButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const newActiveTab = button.id;

            const oldActiveTabButton = <HTMLButtonElement>document.getElementById(activeTab);
            oldActiveTabButton.classList.remove('active');
            button.classList.add('active');

            const oldActiveTab = getActiveTab(activeTab);
            if (oldActiveTab !== newActiveTab) {
                REMOVE_INPUT_ELEMENTS[oldActiveTab]();
                REMOVE_BUTTON_ELEMENTS[oldActiveTab]();

                ADD_INPUT_ELEMENTS[newActiveTab]();
                ADD_BUTTON_ELEMENTS[newActiveTab]();

                activeTab = newActiveTab;
            }

            localStorage.setItem('tab', newActiveTab);
            cryptoTypeInput.value = newActiveTab;
        });
    });
}
