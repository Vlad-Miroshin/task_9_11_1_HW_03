import {parser} from './parser.js';
import {generator} from './generator.js';


// await fetch("./assets/js/data.json")
//   .then(response => response.json())
//   .then(function(json) {
//         data = json;
//   });
//  .then(json => console.log(json));

const parts = await parser("./assets/js/data.json");

console.log('parts=', parts);

