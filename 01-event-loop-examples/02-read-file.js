const { readFile } = require('fs')

console.log('Started first task')

//check & update file path
readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err)
        return
    }
    console.log(result)
    console.log('Completed first task')
})

console.log('Start next task')