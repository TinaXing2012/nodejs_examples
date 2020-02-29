const Product = require('../models/product');

exports.getAllProducts = (req, res, next) => {
    const products = Product.findAll();
    // console.log(products);
    res.render('index', { name: 'Josh', prods: products, path: '/', pageTitle: 'Home' });
};

exports.getProductDetail = (req, res, next) => {
    const products = Product.findById(req.params.prodId);
    res.render('product-detail', { prod: products[0], pageTitle: 'Product Detail', path: '/', name: 'Edward' });
}