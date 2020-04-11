const app = require('express')();
const http = require('http').createServer(app);
const bodyParser = require('body-parser');

const port = process.env.PORT || 5000;

app.use(bodyParser.json());


const server = http.listen(port, () => {
    console.log(`Started listening on ${port}`);
});

module.exports = server;