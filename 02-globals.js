// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

console.log(__dirname)
setInterval(    // function with two args. i.e. handler function and a timeout
            () => { console.log('hello world from Node.JS!') }, // handler function
            1000                                                // timeout after 1 sec
            ) 