

// var chat = require("../models/database/chat.js");

module.exports = function(server){
    var socket = require("socket.io");

    var io = socket.listen(server);

    io.sockets.on('connection', (socket) => {

        var query = chat.find({}); // find all? Or just 8?

        query.sort('-created').limit(8).exec( (err, docs) => {
            if (err) {
                throw(err); // who's catching it?
            }
            console.log('Sending old msgs');
            socket.emit('load old msgs', docs);
        });

        socket.on('new user', onNewUser);
        socket.on('send message', sendMessage);
        socket.on('disconnect', disconnect);
    });

    function disconnect(data){
        if(!socket.nickname) {
           return;
        }

        delete users[socket.nickname];
        updateNicknames()
    }

    function onNewUser(data, callback){
        if (data in users) {
            callback(false);
        } else {
            callback(true); // callback so soon? Is first argument supposed to be error?

            socket.nickname = data;
            users[socket.nickname] = socket;

            updateNicknames();
        }
    }

    function updateNicknames(){
        io.sockets.emit('usernames', Object.keys(users));
    }

    function sendMessage(data, callback){
        var msg = data.trim(); // is the text of the message the only data being sent?

        if (msg.substr(0, 3) === '/w ') {

            msg = msg.substr(3);

            var ind = msg.indexOf(' ');

            if (ind !== -1) {
                var name = msg.substring(0, ind);
                var msg = msg.substring(ind + 1);

                if (name in users) {
                    users[name].emit('whisper', {msg: msg, nick: socket.nickname})
                    console.log('whisper')
                } else {
                    callback('Error! Enter a valid user.');
                }
            } else {
                callback('Error! Please enter a message for your whisper.')
            }
        } else {

            var newMsg = new Chat({msg:msg, nick:socket.nickname});
            newMsg.save( (err) => {
                if (err) {
                    throw err;
                }
                this.io.sockets.emit('new message', {msg: msg, nick: socket.nickname});
            });
            //or send to everyone but the sender
            //socket.broadcast.emit('new message', data);
        }
    }
}
