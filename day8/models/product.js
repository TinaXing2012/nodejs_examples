const products = [];
const getDB = require('../util/database').getDB;

class Product {

    constructor(id, title, price, imageURL, description) {
        this.id = id;
        this.title = title;
        this.price = new Number(price);
        this.imageURL = imageURL;
        this.description = description;
    }

    save() {
        // this.id = Math.floor(Math.random() * 100000);
        // products.push(this);

        // mongoConnect((client) => {
        //     client.db('onlineshopping')
        //         .collection('products')
        //         .insertOne(this)
        //         .then(result => {
        //             console.log(result.result);
        //             client.close();
        //         })
        //         .catch(err => console.log(err));

        // });

        const db = getDB();
        db.collection('products')
            .insertOne(this)
            .then(result => {
                console.log(result.result);
            })
            .catch(err => console.log(err));
    }

    static findAll() {
        return products;
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