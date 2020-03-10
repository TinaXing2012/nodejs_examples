const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getAllProducts = (req, res, next) => {
    Product.find()
        .then(products => {
            res.render('index', { name: 'Josh', prods: products, path: '/', pageTitle: 'Home' });
        })
        .catch(err => console.log(err));
};

exports.getProductDetail = (req, res, next) => {
    Product.findById(req.params.prodId)
        .then(product => {
            console.log('prodcut: ', product);
            res.render('product-detail', { prod: product, pageTitle: 'Product Detail', path: '/', name: 'Edward' });
        })
        .catch(err => console.log(err));
}

exports.addToCart = (req, res, next) => {
    Product.findById(req.body.id)
        .then(product => {
            req.user.addToCart(product)
                .then(() => {
                    res.redirect('/cart');
                })
        }).catch(err => console.log(err));

}

exports.getCart = (req, res, next) => {
    res.render('cart', { cart: Cart.getCart(), pageTitle: 'Shopping Cart Detail', path: '/cart', name: 'Edward' })
}

exports.deleteInCart = (req, res, next) => {
    Cart.delete(req.body.prodId);
    res.redirect('/cart');
}