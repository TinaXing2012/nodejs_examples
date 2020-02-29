const Product = require('../models/product');

exports.getAllProducts = (req, res, next) => {
    const products = Product.findAll();
    res.render('index', { name: 'Josh', prods: products, path: '/', pageTitle: 'Home' });
};