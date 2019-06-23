const socketConfigs = require('./config/config');
const socketIO = require('socket.io');
const io = socketIO.listen(socketConfigs.port);

console.log(`Socket server is running on ${socketConfigs.port}`);

io.on('connection', socket => {
  socket.on('presence', (data, ack) => {
    console.log('socket on presence');
    ack(data);
  });
});