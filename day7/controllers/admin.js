const Product = require('../models/product');

exports.getProductForm = (req, res, next) => {
    res.render('add-product', { name: 'Tina', path: '/admin/add-product', pageTitle: 'Add Product' });
}

exports.postProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageURL;
    const price = req.body.price;
    const description = req.body.description;

    const prod = new Product(null, title, price, imageUrl, description);
    prod.save();

    res.redirect('/');
}