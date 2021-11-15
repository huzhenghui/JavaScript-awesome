import _ from 'lodash';
import './style.css';
import Picture from './webpack.config.png';

function component() {
    const element = document.createElement('div');

    const h1 = document.createElement('h1');
    h1.textContent = _.join(['Hello ', 'webpack.config.js'], ' ');
    h1.classList.add('hello');

    element.appendChild(h1);

    const myPicture = new Image();
    myPicture.src = Picture;

    element.appendChild(myPicture);

    return element;
}

document.body.appendChild(component());
