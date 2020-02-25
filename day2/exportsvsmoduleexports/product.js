class Product {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name.toUpperCase();
    }

    set name(newName) {
        this._name = newName;
    }
}

// exports.Prod = new Product('mic'); //this is bad
exports.Prod = Product;

// module.exports = Product;

// return module.exports;