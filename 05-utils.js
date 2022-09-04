const sayHi = (name) =>{                // sayHi() is a function that takes one input i.e. name and prints it
    console.log(`Hello there ${name}`)
}

//console.log(module)  // this shows the detail of module, the most importat is the exports that is null list
module.exports = sayHi // this exports the sayHi() function and can now be used in file where this file is required
