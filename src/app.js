const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.text());
app.use(express.static(__dirname + '/public'));
app.use('/data', express.static(__dirname + '/data'));

const serveFileFromRoot = (res, relativePath) =>
  res.sendFile(path.join(`${__dirname}/${relativePath}`));

const serveHome = (_, res) => serveFileFromRoot(res, 'index.html');

const notifyServerStart = () =>
  console.log(`Server listening at http://localhost:${port}/`);

// routes
app.get('/', serveHome);

const port = process.env.PORT || 1234;
app.listen(port, notifyServerStart);
