const {createReadStream} = require('fs')

// reads default 64kb data
// last buffer - remainder
// use highWaterMark property to control size of stream
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 , encoding: 'utf8'})
const stream = createReadStream('./content/big.txt', {encoding: 'utf8'})

stream.on('data', (result) => { console.log(result) })
stream.on('error', (err)=>{ console.log(err) })