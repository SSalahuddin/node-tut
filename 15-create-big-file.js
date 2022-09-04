const { writeFileSync } = require('fs')

for(let i=0; i<10000; i++){ //164 KB (168,890 bytes)
    writeFileSync('./content/big.txt',`hello world ${i}\n`, {flag: 'a'})
}