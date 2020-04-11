const server = require('./app');
const io = require('socket.io')(server, { pingTimeout: 30000 });
console.log('socket')
io.on('connection', (client) => {
    console.log(`user connected `);
})