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


// const prod = new productModel({
//     title: "Node.js",
//     imageURL: "https://launchclinic.com/wp-content/uploads/2015/09/Week-3-700-x-400.png",
//     price: 10,
//     description: "Good"
// });
// prod.save()