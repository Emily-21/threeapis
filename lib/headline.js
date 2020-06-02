const fetch = require('node-fetch');
const fs = require('fs')
const url = 'https://content.guardianapis.com/search?api-key=338c67bd-26f7-4904-861d-00857fbfa5fa';




const getHeadline = async () => {
    let data = await fetch(url);
    let JSONdata = await data.json();
    return JSONdata;    
}


module.exports = getHeadline;

