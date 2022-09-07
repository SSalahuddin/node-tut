//server works only by providing correct user i.e. 
//localhost:5000/?user=Sumayyea
//localhost:5000/about/?user=Sumayyea
//localhost:5000/api/products/?user=Sumayyea
//localhost:5000/api/items/?user=Sumayyea

const authorize2 = (req, res, next)=>{
    const {user} = req.query
    if(user === 'Sumayyea'){
        req.user = {name: 'Sumayyea', id: 51}
        next()
    }else{
        res.status(401).send('Unauthorize user!')
    }
}

module.exports = authorize2