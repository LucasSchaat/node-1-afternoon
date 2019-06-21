const products = require('../products.json')

const getProducts = (req, res) => {
    const {price} = req.query
    if (price) {
        const queryPrice = products.filter(product => +product.price >= +price)
        console.log(queryPrice)
        return res.status(200).send(queryPrice)
    }
    res.status(200).send(products)
}
            
module.exports = getProducts