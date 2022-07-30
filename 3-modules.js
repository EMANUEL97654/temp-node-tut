//Common Js
//Modules - Encapsulated Code (only share minimum)
const names = require('./names');
const sayHi = require('./utils.js');
const data = require('./alternative-flavor');
//console.log(data.singlePerson.name);
require('./7-mind-grenade');

sayHi('Emanuel');
sayHi(names.john);
sayHi(names.peter);