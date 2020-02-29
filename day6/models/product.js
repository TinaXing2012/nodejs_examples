const products = [];

class Product {

    constructor(title, price, imageURL, description) {
        this.title = title;
        this.price = price;
        this.imageURL = imageURL;
        this.description = description;
    }

    save() {
        products.push(this);
    }

    static findAll() {
        return products;
    }

}

module.exports = Product;