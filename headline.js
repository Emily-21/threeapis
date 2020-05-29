const fetch = require('node-fetch');
const fs = require('fs')

const url = 'https://content.guardianapis.com/search?api-key=338c67bd-26f7-4904-861d-00857fbfa5fa';

https://newsapi.org/v2/top-headlines?country=us&apiKey=ffd3f3c1b9d349bf91ab0c493ac2f0f6
const getHeadline = async () => {
    let data = await fetch(url);
    let JSONdata = await data.json();

    console.log(JSONdata)
    return JSONdata;
}

getHeadline();

APIID = 'ffd3f3c1b9d349bf91ab0c493ac2f0f6'