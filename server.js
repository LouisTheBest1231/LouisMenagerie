const express = require('express');
const path = require('path')
const app = express();
const http = require('http');
const httpServer = http.createServer(app)

//For the sitemap creation : Code from : https://www.altcademy.com/blog/how-to-add-sitemap-in-reactjs/#:~:text=ReactJS%2C%20being%20a%20JavaScript%20library,way%20to%20create%20a%20sitemap.
const { SitemapStream, streamToPromise } = require('sitemap');
const routes = require('./src/routes');

//Makes the react build public
app.use(express.static(path.join(__dirname, 'client', 'build')));

//Makes the public files available for the app
app.use(express.static(path.join(__dirname, 'client', 'public')));

//For the browser crawler
app.get('/sitemap.xml', (req, res) => {
    const sitemap = new SitemapStream({ hostname: 'https://louismenagerie.com' });
  
    routes.forEach((route)=>{
        console.log(route)
        sitemap.write({ url: route.path, changefreq: 'monthly', priority: 0.7 });
    })
  
    sitemap.end();
    streamToPromise(sitemap).then((sm) => {
      res.header('Content-Type', 'application/xml');
      res.send(sm);
    });
  });

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