import './styles/index.css';
import crypto from './crypto';
import tab from './tab';

document.body.style.backgroundColor = 'white';

document.addEventListener('DOMContentLoaded', () => {
    document.body.style.backgroundColor = '';
});

tab();
crypto();
