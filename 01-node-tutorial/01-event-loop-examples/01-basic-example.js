console.log('First task')
setTimeout( () => {         // callback is executed after line 5 even the time set is 0
    console.log('Second task')
}, 0)
console.log('Next task')