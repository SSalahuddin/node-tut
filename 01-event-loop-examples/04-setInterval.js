//process stays alive unless kill process using CTRL+C
setInterval( () => {
    console.log('hello world')
}, 2000)
console.log(`I'll run first.`)