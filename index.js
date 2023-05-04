const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const port = process.env.PORT || 5000;

const chefCategories = require('./Data/chefCategories.json');

app.get('/', (req, res) => {
    res.send('foodmood Website is Running');
});

app.get('/chef-categories', (req, res) => {
    res.send(chefCategories);
});

app.get('/single-categories/:id', (req, res) => {
    const id = req.params.id;
    console.log(chefCategories);
    const getSingleCourse = chefCategories.find(p => p.id === id);
    console.log(getSingleCourse);
    res.send(getSingleCourse); 

});

app.listen(port, () => {
    console.log('foodmood Website is Running', port);
});