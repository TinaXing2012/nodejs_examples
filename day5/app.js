const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();
//false: querystring
//true: qs
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).send('Page Not Found');
});

app.use((err, req, res, next) => {
    res.status(500).send('Something Broke!');
});

app.listen(3000);