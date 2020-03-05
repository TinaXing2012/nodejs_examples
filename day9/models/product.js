const products = [];
const getDB = require('../util/database').getDB;

class Product {

    constructor(id, title, price, imageURL, description) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.imageURL = imageURL;
        this.description = description;
    }

    save() {
        const db = getDB();
        db.collection('products')
            .insertOne(this)
            .then(result => {
                console.log(result.result);
            })
            .catch(err => console.log(err));
    }

    static findAll() {
        const db = getDB();
        return db.collection('products')
            .find()
            .toArray();
    }

    static findById(prodId) {
        return products.filter(p => p.id == prodId);
    }

    update() {
        const editProductIndex = products.findIndex(p => p.id == this.id);
        products[editProductIndex] = this;
    }

    static deleteById(prodId) {
        const deleteProductIndex = products.findIndex(p => p.id == prodId);
        products.splice(deleteProductIndex, 1);
    }

}

module.exports = Product;