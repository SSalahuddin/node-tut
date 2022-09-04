const { readFile, writeFile } = require('fs').promises

/*block 1
readFile('first.txt', 'utf8', (err, data) => {
    if(err){
        return
    }else{
        console.log(data)
    }
})*/

/*block 2
const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    }) 
}

getText('first.txt')
.then(result => console.log(result))
.catch(err => console.log(err))*/

/*block3
const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const start = async() => {
    try{
        const first = await readFilePromise('first.txt', 'utf8')
        const second = await readFilePromise('second.txt', 'utf8')
        await writeFilePromise('result-mind-grenade.txt', `Great: ${first} ${second}`)
        console.log(first, second)
    } catch (error){
        console.log(error)
    }
}

start()*/

//block4 - best one to use, easier and friendly
const start = async() => {
    try{
        const first = await readFile('first.txt', 'utf8')
        const second = await readFile('second.txt', 'utf8')
        await writeFile('result-mind-grenade.txt', `Great: ${first} ${second}`,{ flag: 'a' })
        console.log(first, second)
    } catch (error){
        console.log(error)
    }
}

start()