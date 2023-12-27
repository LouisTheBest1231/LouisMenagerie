const express = require('express');
const path = require('path')
const app = express();
const http = require('http');
const httpServer = http.createServer(app)

app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'client', 'build','index.html'));
});

const port = process.env.PORT || 3000;
httpServer.listen(port, ()=>{
    console.log('SERVER : Starting...');
    console.log('SERVER : Listening on port : ' + port);
});