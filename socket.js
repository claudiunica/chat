const server = require('./app');
const io = require('socket.io')(server, { pingTimeout: 30000 });
const User = require('./models/User');
const connectedUsers = [];

io.on('connection', (client) => {
    console.log(`User connected`, client.id);
    console.log(`connected users`, connectedUsers);
    let newUser = (new User(client.id));
    connectedUsers.push(newUser);
    client.emit('connectedUser', newUser);
    client.on('user_setup', (data) => {
        const userToUpdate = connectedUsers.find(({ id }) => id === client.id);
        if (userToUpdate) {
            userToUpdate.setNickname(data.nickname ? data.nickname : null);
            userToUpdate.setFirstName(data.firstname ? data.firstname : null);
            userToUpdate.setLastName(data.lastName ? data.lastName : null);
            userToUpdate.setEmail(data.email ? data.email : null);
        }
    })

    client.on('message', (data) => {
        console.log('message received', data);
        if (data.recipient && data.recipient.id && data.message !== undefined) {
            client.to(data.recipient.id).emit('message', {
                date: new Date(),
                sender: connectedUsers.find(({ id }) => id === client.id),
                message: data.message
            });
        } else {
            throw new Error('Wrong message format');
        }
    })

    client.on('disconnect', () => {
        const index = connectedUsers.findIndex(({ id }) => id === client.id);
        if (index >= 0) {
            connectedUsers.splice(index, 1);
        }
    })

    client.on('check', () => {
        console.log(connectedUsers);
    })
})

module.exports = { connectedUsers };

/*
docs:
on message:
    data:{
        recipient: User,
        message:string,
        date: Date
    }
*/