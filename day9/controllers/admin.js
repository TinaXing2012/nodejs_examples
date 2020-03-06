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
    prod.save()
        .then(result => {
            res.redirect('/');
        }).catch(err => console.log(err));


}

exports.editProductPage = (req, res, next) => {
    Product.findById(req.params.prodId)
        .then(product => {
            res.render('edit-product', { product: product, path: '/', pageTitle: 'Edit Product', name: 'Tina' });
        }).catch(err => console.log(err));

}

exports.editProductPost = (req, res, next) => {
    const updatedProduct = new Product(req.body.id, req.body.title, req.body.price, req.body.imageURL, req.body.description);
    updatedProduct.update();
    // res.redirect('/');
    res.redirect('/products/' + updatedProduct.id);
}

exports.deleteProduct = (req, res, next) => {
    Product.deleteById(req.body.id);
    res.redirect('/');
}