const fetch = require('node-fetch');
const fs = require('fs')
const url = "https://api.themoviedb.org/3/movie/popular?api_key=d4b184f9c93163170bdb0749ed8e2dc5";

const getMovie = async () => {
    let data = await fetch(url);
    let JSONdata = await data.json();
    return JSONdata;    
}

module.exports = getMovie;