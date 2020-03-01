let cart = null;

module.exports = class Cart {

    static save(product) {

        if (cart) { // cart is not null
            const existingProductIndex = cart.products.findIndex(p => p.id == product.id); // to check product is existing in cart
            console.log('existingProductIndex: ', existingProductIndex);
            if (existingProductIndex >= 0) { // exist in cart already
                const exsitingProduct = cart.products[existingProductIndex];
                exsitingProduct.qty += 1;
                cart.totalPrice += product.price;

            } else { //not exist
                product.qty = 1;
                cart.products.push(product);
                cart.totalPrice += product.price;
            }
        } else {
            cart = { products: [], totalPrice: 0 };
            product.qty = 1;
            cart.products.push(product);
            cart.totalPrice = product.price;
        }
    }

    static getCart() {
        return cart;
    }

}