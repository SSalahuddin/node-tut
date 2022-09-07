const express = require('express')
const app = express()
const { products } = require('./data')

//1.homepage
app.get('/', (req, res)=>{
    res.send('<h1>Home Page</h1><a href="/api/products">Click here to view products!</a>')
})

//2.fetch all the products but send only the selected information such as id, name, and image
app.get('/api/products', (req,res)=>{
    const newProducts = products.map((product) => {
        const {id, name, image} = product
        return {id, name, image}
    })

    res.json(newProducts)
})

//3.fetch only the specific product and its related attributes
app.get('/api/products/:productID', (req,res)=>{  
    //console.log(req)        //large req object with many things
    //console.log(req.params) //output is { productID: '1' }
    const { productID } = req.params
    //const singleProduct = products.find((product) => product.id === 1) //fetches only first product
    const singleProduct = products.find((product) => product.id === Number(productID)) // fetches all products

    if(!singleProduct){       //user can search any product, how to handle missing products
        return res.status(404).send('Product does not exist!')
    }

    res.json(singleProduct)
})

//4.how to handle each products review
app.get('/api/products/:productID/reviews/:reviewID', (req, res)=>{
    console.log(req.params)          //provides productID and reviewID e.g. { productID: '1', reviewID: 'abc' }
    res.send('The product is good.') //general reviews response   
})

//5.how to query database and filter results? etc
///api/v1/query?search=sofa, /api/v1/query?search=albany sofa, /api/v1/query?search=albany sofas
///api/v1/query?search=albany, /api/v1/query?search=albany&limit=1, /api/v1/query?search=albany&limit=2
///api/v1/query?search=albany&limit=3, /api/v1/query?limit=3, /api/v1/query?limit=2, etc.
app.get('/api/v1/query', (req, res)=>{
    console.log(req.query)      //provides different queries searched e.g. { name: 'sumayyea', id: '51' }
    const {search, limit} = req.query
    let sortedProducts = [...products]

    if(search){
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }

    if(limit){
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }

    if(sortedProducts.length < 1){
        //res.status(200).send('No producut match your search!')
        return res.status(200).json({sucess: true, data: []})
    }

    //res.send('Please wait...')
    res.status(200).json(sortedProducts)
})

app.listen(5000, ()=>{
    console.log('Server is listening on port 5000...')
})