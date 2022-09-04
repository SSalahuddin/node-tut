//asyncronous file module functions
const { readFile, writeFile } = require('fs')
console.log('start')

//need callback()
readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err)
        return
    }
    const first = result
    //need callback()
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err){
            console.log(err)
            return
        }
    const second = result
    writeFile(
        './content/result-async.txt',
        `Here is the result: ${first}, ${second}`,
        (err, result) => {
            if(err){
                console.log(err)
                return
            }
            console.log('done with this task')
        })
    })
})
console.log('starting the next one')

//alternative to callbacks is promises and async await