const fs = require('then-fs');
const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');

const CONTENT_FILE = path.join(__dirname, 'data/content.txt');
console.log('CONTENT_FILE: ', CONTENT_FILE);

const app = express();
// serve static files from folder: public
app.use(express.static('public'));
app.use(bodyParser.text());

app.get('/api/content', (req, res, next) => {
  fs.readFile(CONTENT_FILE)
    .then(text => res.send(text))
    .catch(next);
});
app.post('/api/content', (req, res, next) => {
  fs.writeFile(CONTENT_FILE, req.body)
    .then(() => res.send())
    .catch(next);
});
app.use((err, req, res, next) => {
  console.log('error: ', err);
  return res.status(500).send(err);
});

const listener = app.listen(process.env.PORT|3000, () => {
  console.log('Server listening on ', listener.address().port);
});
