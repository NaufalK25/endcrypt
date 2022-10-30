import crypto from './crypto';
import { getActiveTab } from './helper';
import { ADD_INPUT_ELEMENTS, REMOVE_INPUT_ELEMENTS } from './input';

const tabs = <HTMLDivElement>document.getElementById('tabs');
const tabButtons = tabs.querySelectorAll('button');
const cryptoTypeInput = <HTMLInputElement>document.getElementById('crypto-type');
const formGroup = <HTMLDivElement>document.getElementById('form-group');
const buttonGroup = <HTMLDivElement>document.getElementById('button-group');
const buttons = buttonGroup.querySelectorAll('button');

export default () => {
    let activeTab = getActiveTab(localStorage.getItem('tab'));

    if (!cryptoTypeInput.value) {
        cryptoTypeInput.value = activeTab;
    }

    if (!formGroup.hasChildNodes()) {
        ADD_INPUT_ELEMENTS[activeTab]();

        buttons.forEach(button => {
            button.id = `${button.getAttribute('data-btn-type')}-${activeTab}`;
        });

        crypto();
    }

    const activeTabButton = <HTMLButtonElement>document.getElementById(activeTab);
    activeTabButton.classList.add('active');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const newActiveTab = button.id;

            const oldActiveTabButton = <HTMLButtonElement>document.getElementById(activeTab);
            oldActiveTabButton.classList.remove('active');
            button.classList.add('active');

            const oldActiveTab = getActiveTab(activeTab);
            if (oldActiveTab !== newActiveTab) {
                REMOVE_INPUT_ELEMENTS[oldActiveTab]();

                ADD_INPUT_ELEMENTS[newActiveTab]();

                buttons.forEach(button => {
                    button.id = `${button.getAttribute('data-btn-type')}-${newActiveTab}`;
                });

                activeTab = newActiveTab;
            }

            localStorage.setItem('tab', newActiveTab);
            cryptoTypeInput.value = newActiveTab;

            crypto();
        });
    });
};
