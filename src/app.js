// // import './utils.js';
// // import sub, { sqaure, add } from './utils.js';
// import isSenior, { isAdult, canDrink} from './utils.js';

// console.log('App is running');
// console.log(isAdult(18));
// console.log(canDrink(19));
// console.log(isSenior(65));
// // console.log(sqaure(4));
// // console.log(add(100,2000));
// // console.log(sub(100,2000));

//Email validation using 3 party import Validator
// import validator from 'validator';
// console.log(validator.isEmail('test@gmail.com'));



import React from 'react';
import ReactDom from 'react-dom';

const template = <p>This is JSX from Webpack</p>;
ReactDom.render(template, document.getElementById('app'));
