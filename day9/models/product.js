const products = [];
const getDB = require('../util/database').getDB;
const ObjectId = require('mongodb').ObjectId;

class Product {

    constructor(id, title, price, imageURL, description) {
        this._id = id;
        this.title = title;
        this.price = price;
        this.imageURL = imageURL;
        this.description = description;
    }

    save() {
        const db = getDB();
        return db.collection('products')
            .insertOne(this);
    }

    static findAll() {
        const db = getDB();
        return db.collection('products')
            .find()
            .toArray();
    }

    static findById(prodId) {
        // return products.filter(p => p.id == prodId);
        const db = getDB();
        return db.collection('products')
            .findOne({ _id: new ObjectId(prodId) });

    }

    update() {
        const db = getDB();
        return db.collection('products')
            .updateOne({ _id: new ObjectId(this._id) }, {
                $set: {
                    title: this.title,
                    price: this.price,
                    imageURL: this.imageURL,
                    description: this.description
                }
            });
    }

    static deleteById(prodId) {
        const deleteProductIndex = products.findIndex(p => p.id == prodId);
        products.splice(deleteProductIndex, 1);
    }

}

module.exports = Product;