const products = [];

class Product {

    constructor(id, title, price, imageURL, description) {
        this.id = id;
        this.title = title;
        this.price = new Number(price);
        this.imageURL = imageURL;
        this.description = description;
    }

    save() {
        this.id = Math.floor(Math.random() * 100000);
        products.push(this);
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