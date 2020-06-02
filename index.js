const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');
const app = express();
require('dotenv').config();


const guardian = require('./lib/headline')
const popMovie = require('./lib/movies')

const tenHeadlines = async() => {
    let myArray = [];
    let data = await guardian();
    for (let i = 0; i < 10 ; i++) {
    myArray.push({
       title: data.response.results[i].webTitle,
        url: data.response.results[i].webUrl,
    })
 } 
 return myArray;
 }


 const RanNum = () => {
     let num = Math.ceil(Math.random() * 18)
     console.log(num)
     return num;
 }
 
 

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

    let data = await tenHeadlines();
    res.render('guardian', {data});

})

app.get('/movies', async (req, res) => {
    let i = RanNum();
    let data = await popMovie();
    let movieTitle = data.results[i].title;
   let release = data.results[i].release_date;
   let overview = data.results[i].overview;
    res.render('movies', {movieTitle, release, overview});
})

app.listen(3000, () => {
    console.log('server is running on port 3000');
})
