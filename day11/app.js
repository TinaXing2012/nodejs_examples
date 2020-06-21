const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const userRoutes = require('./routes/user');
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
mongoose.set('useCreateIndex', true);

//false: querystring
//true: qs
app.use(bodyParser.urlencoded({ extended: true }));
//http://localhost:3000/css/main.css
app.use(express.static(path.join(__dirname, 'public')));
//http://localhost:3000/abc => package till public
// http://localhost:3000/abc/css/main.css 
// app.use('/abc', express.static(path.join(__dirname, 'public')));
//http://localhost:3000/abc => css folder
//http://localhost:3000/abc/main.css
// app.use('/abc', express.static(path.join(__dirname, 'public', 'css')));

app.use((req, res, next) => {
    User.findById('5e66f68515f15f313c76b07f')
        .then(userInDB => {
            req.user = userInDB;
            next();
        })
        .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(userRoutes);

app.use((req, res, next) => {
    res.status(404).send('Page Not Found');
});

// app.use((err, req, res, next) => {
//     res.status(500).send('Something Broke!');
// });
mongoose.connect('mongodb://localhost:27017/onlineshopping', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(3000, () => {
            console.log('Server is running on 3000');
        });
    })
    .catch(err => console.log(err));