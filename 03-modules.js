// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./04-names')
const sayHi = require('./05-utils')
const data = require('./06-alternative-flavor')
require('./07-mind-grenade')

//console.log(names)

sayHi('Sumayyea')
//sayHi(musa)         // can't use the variables directly, need to access it via names object
//sayHi(ali)          // can't use the variables directly, need to access it via names object
sayHi(names.musa)
sayHi(names.ali)

console.log(data)