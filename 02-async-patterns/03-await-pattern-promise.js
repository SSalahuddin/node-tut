const { readFile, writeFile } = require('fs').promises

const start = async() => {
    try{
        const first = await readFile('first.txt', 'utf8')   //path to first file
        const second = await readFile('second.txt', 'utf8') //path to second file
        await writeFile('result-mind-grenade.txt', `Great: ${first} ${second}`,{ flag: 'a' })
        console.log(first, second)
    } catch (error){
        console.log(error)
    }
}

start()