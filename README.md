# CS-361-assignment-8
Micro Service Communication Contract for CS 361 Partner Project

1. Clear instructions for how to REQUEST data from the microservice you implemented. Include an example call.

Data can be requested from my micro service by sending an HTTP push request to your localhost at port 3000. This push request must send 
an array of two strings that contains a first name in the first element and a last name in the second. 

Example Call (req is a http request object):

    const userName = ['Dwight' , 'Schrute'];
    req.write(JSON.stringify(userName)); 
    req.end();

2. Clear instructions for how to RECEIVE data from the microservice you implemented

Data is recieved in the response to the HTTP push request. The data recieved will be an array of two UTF style date objects. 

Example Received Data (data is in response): 

    const req = http.request(postOptions, (res) => {
      res.setEncoding('utf8');
      res.on('data', (response) => {
        console.log(`Response from server: ${response}`);
      });
    });

3. UML sequence diagram showing how requesting and receiving data work. Make it detailed enough that your partner (and your grader) will understand


![image](https://user-images.githubusercontent.com/114451735/199165607-128c5929-977b-493e-b324-6946779a49cc.png)

