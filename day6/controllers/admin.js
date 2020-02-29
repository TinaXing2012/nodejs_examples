const Product = require('../models/product');

exports.getProductForm = (req, res, next) => {
    res.render('add-product', { name: 'Tina' });
}

exports.postProduct = (req, res, next) => {
    console.log('save product...');
    // console.log(req.body);
    const title = req.body.title;
    const imageUrl = req.body.imageURL;
    const price = req.body.price;
    const description = req.body.description;

    const prod = new Product(title, price, imageUrl, description);
    prod.save();

    console.log(Product.findAll());

    res.send('Save Successfully');
}