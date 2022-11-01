'use strict';

const http = require('node:http');

//Object that stores all HTTP request data required to send POST request
const postOptions = {
  hostname: 'localhost',
  port: 3000,
  path: '/store',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'//'text/plain'
  }
};

const userName = ['Richard', 'Doherty'];
//const userName = ['Dwight' , 'Schrute'];

//Define request object that defines function to retrieve the POST response data from the server
const req = http.request(postOptions, (res) => {
  res.setEncoding('utf8');
  res.on('data', (response) => {
    console.log(`Response from server: ${response}`);
  });
});

//Send a JSON string of array with two date objects
console.log(`Sending to server: ${JSON.stringify(userName)}`)
req.write(JSON.stringify(userName)); 
req.end();