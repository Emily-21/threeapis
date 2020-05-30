const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');
const app = express();
require('dotenv').config();


const guardian = require('./lib/headline')

let myArray = [];

const tenHeadlines = async() => {
    let data = await guardian();
    for (let i = 0; i < 10 ; i++) {
    myArray.push(data.response.results[i].webTitle);
}
    return myArray;
}

tenHeadlines()
console.log(myArray);

app.use(express.static(path.join(__dirname, 'public')));


app.engine('.hbs', hbs({
    defaultLayout: 'layout',
    extname: 'hbs'
}))

app.set('view engine', '.hbs');


app.get('/', (req, res) => {
    res.render('index');
}) 


app.get('/guardian', async (req, res) => {
    let data = await guardian();
    // let headline = tenHeadlines()
    let headline = data.response.results[0].webTitle
    let headline2 = data.response.results[1].webTitle;
    let link = data.response.results[0].webUrl;
    let link2 = data.response.results[1].webUrl;
    res.render('guardian', {headline, link, headline2, link2});

})


app.listen(3000, () => {
    console.log('server is running on port 3000');
})
