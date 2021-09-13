/// <reference types="cypress" />
const fs = require('fs');

const dataBuffer = fs.readFileSync('abc.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
//console.log(data.Test);

const abc= data.Test

console.log(abc);
abc.forEach((credentials) => {
    console.log(credentials.email, credentials.pass);
    var count =Object.keys(data.Test).length;

    console.log(count);


});