const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
        required: true
    },
    price: Number,
    description: String
});

// model name: 'Product' will be used to turn into a collection name in DB
// 'Product' => 'product' + 's' => products
module.exports = mongoose.model('Product', productSchema);