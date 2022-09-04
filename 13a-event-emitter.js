// get class
// if want custom functionality then extend from class
// otherwise just for emitting and handling events, use to create instance
const EventEmitter = require('events')
const customEmitter = new EventEmitter()

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it

/*first use
// on to listen for an event
customEmitter.on('response', ()=>{
    console.log('data recieved')
})

// emit to emit an event
customEmitter.emit('response')
*/

customEmitter.on('response', (name, id)=>{
    console.log(`data received: user ${name} with id: ${id}`)
})

customEmitter.on('response', ()=>{
    console.log('some other logic here')
})

customEmitter.emit('response', 'sumayyea', '51')

//events are core building blocks of node.js and critical