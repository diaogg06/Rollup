import './index.css';
import image from './assets/cat.jpg';

console.log('Hello World!');

const title = document.createElement('h1');
title.textContent = 'I love JavaScript';

const imgCat = document.createElement('img');
imgCat.src = image;

document.body.append(title);
document.body.append(imgCat);
