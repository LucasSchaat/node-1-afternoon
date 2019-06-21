const products = require('../products.json')

const getProduct = (req, res) => {
    const {id} = req.params
    const product = products.find(product => +product.id === +id)
    if (!product) {
        return res.status(500).send('Item not in list')
    }
    res.send(product)
}


module.exports = getProduct