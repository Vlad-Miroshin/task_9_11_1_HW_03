import {parser} from './parser.js';
import {generator} from './generator.js';

// fetch("./assets/js/data.json")
//   .then(response => response.json())
//   .then(json => console.log(json));

let data = parser.load("./assets/js/data.json");

console.log('data=', data);