let cart = null;

module.exports = class Cart {

    static save(product) {

        if (cart === null) {
            cart = { products: [], totalPrice: 0 };
        }

        const existingProductIndex = cart.products.findIndex(p => p.id == product.id); // to check product is existing in cart
        console.log('existingProductIndex: ', existingProductIndex);
        if (existingProductIndex >= 0) { // exist in cart already
            const exsitingProduct = cart.products[existingProductIndex];
            exsitingProduct.qty += 1;
        } else { //not exist
            product.qty = 1;
            cart.products.push(product);
        }

        cart.totalPrice += product.price;
    }

    static getCart() {
        return cart;
    }

}