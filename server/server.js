const express = require('express');

const path = require('path');

const app = express();

const publicPath = path.join(__dirname, '..', 'public');

// This will receive the port number from a environment variable that heroku will set
// If we are on Heroku, this variable will be set and we use it, otherwise we are local
// and we set a default 
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

// This static port is fine on a local machine, but not on heroku which provides a value
//   app.listen(3000,() => {
app.listen(port, () => {
    console.log('Server is up');
});