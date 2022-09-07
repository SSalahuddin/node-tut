const logger = (req, res, next)=>{
    const method = req.method               // Get
    const url = req.url                     // /
    const time = new Date().getFullYear()   // 2022
    console.log(method, url, time)
    next()
}

module.exports = logger