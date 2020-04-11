const server = require('./app');
const io = require('socket.io')(server, { pingTimeout: 30000 });

const connectedUsers = [];

let user_id = 1;
io.on('connection', (client) => {
    console.log(`user connected `);
})

function generateUserId() {
    user_id++;
    return user_id;
}
module.exports = { connectedUsers, generateUserId };