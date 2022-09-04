// this is original version
// it simply prints three statements
// we'll break the code into three files
// secret, musa, and ali variables go to 04-names.js file
// sayHi() function goes to 05-utils.js file
// three function calls go to app.js file

const secret = 'super secret'
const musa = 'musa'
const ali = 'ali'

const sayHi = (name) =>{                // sayHi() is a function that takes one input i.e. name and prints it
    console.log(`Hello there ${name}`)
}

sayHi('Sumayyea')
sayHi(musa)         
sayHi(ali)  