const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getAllProducts = (req, res, next) => {
    const products = Product.findAll();
    // console.log(products);
    res.render('index', { name: 'Josh', prods: products, path: '/', pageTitle: 'Home' });
};

exports.getProductDetail = (req, res, next) => {
    const products = Product.findById(req.params.prodId);
    res.render('product-detail', { prod: products[0], pageTitle: 'Product Detail', path: '/', name: 'Edward' });
}

exports.addToCart = (req, res, next) => {
    const addedProduct = Product.findById(req.body.id)[0];
    Cart.save(addedProduct);
    res.redirect('/cart');
}

exports.getCart = (req, res, next) => {
    res.render('cart', { cart: Cart.getCart(), pageTitle: 'Shopping Cart Detail', path: '/cart', name: 'Edward' })
}

exports.deleteInCart = (req, res, next) => {
    Cart.delete(req.body.prodId);
    res.redirect('/cart');
}