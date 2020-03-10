const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    cart: {
        items: [{
            productId: {
                type: mongoose.Types.ObjectId,
                ref: 'Product',
                required: true
            },
            qty: {
                type: Number,
                required: true
            }
        }],
        totalPrice: Number
    }
});

userSchema.methods.addToCart = function(product) {
    const cart = this.cart;
    if (cart.items.length === 0) {
        cart.items.push({ productId: product._id, qty: 1 });
        cart.totalPrice = product.price;

    } else {
        const isExisting = cart.items.findIndex(objInItems => new String(objInItems.productId).trim() === new String(product._id).trim());
        if (isExisting === -1) {
            cart.items.push({ productId: product._id, qty: 1 });
            cart.totalPrice += product.price;
        } else {
            const existingItem = cart.items[isExisting];
            existingItem.qty += 1;
            cart.totalPrice += product.price;
        }
    }
    return this.save();

};

//'User' => users
module.exports = mongoose.model('User', userSchema);