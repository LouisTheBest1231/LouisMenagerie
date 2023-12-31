const express = require('express');
const path = require('path')
const app = express();
const http = require('http');
const httpServer = http.createServer(app)


//Makes the react build public
app.use(express.static(path.join(__dirname, 'client', 'build')));

//Makes the public files available for the app
app.use(express.static(path.join(__dirname, 'client', 'public')));


//Catches the http request for all  the routes and send the react app
app.get('/*', (req, res)=>{
    res.sendFile(path.join(__dirname, 'client', 'build','index.html'));
});

//Make the server listen to a port (The heroku selected port : process.env.PORT)
const port = process.env.PORT || 3000;
httpServer.listen(port, ()=>{
    console.log('SERVER : Starting...');
    console.log('SERVER : Listening on port : ' + port);
});