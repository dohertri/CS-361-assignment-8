'use strict';
/**CS 361 Micro Service for 
 * 
 * 
 */
//User Date Store in .js file
const users = require('./users.js').Users;

//Set up express app and set it to send and recieve JSON objects
let express = require('express');
let bodyParser = require('body-parser');
let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Establish port that our server will operate on 
const port = 3000;
app.listen(port);
console.log('Server listening at http://localhost:' + port);






//Function: Go through the array of user objects stored in user.js and if
//          any of them have the same first and last name provided return the user
//Parameters: strings for the first and last name you are searching for 
//Returns: user if they found or an empty object if not
function findUser(first, last){
    let foundUser = {};
    users.forEach(user => {
        if (user.first_name === first && user.last_name === last) {
            foundUser = user;
        }
    });
    return foundUser;
}

//Post request event handler
app.post('/store', function(req, res) {
    
    console.log(`Server recieve: ${req.body}`);
    //Search for user
    let user = findUser(req.body[0],req.body[1]);    

    //if user is not found change the response status to 404 and send no data in response
    //if the user is found change the response status to 200 and send the user's time in 
    //and out in an array in the response
    if(Object.keys(user).length === 0){
        res.status(404);
        res.send("User was not found")

    }else{
        console.log(`Server sending ${[user.time_in, user.time_out]}`);
        res.status(200);
        res.send([user.time_in, user.time_out]);
    }
    
});



