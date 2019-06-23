const io = require('socket.io-client');
const socketConfigs = require('../config/config');

require('chai').should();
require('../server.js');
describe('Test socket', () => {
  let socket;
  beforeEach(done => {
    socket = io.connect(`http://localhost:${socketConfigs.port}`);

    socket.on('connect', () => {
      // console.log('Connected to Server!')
      done();
    });

    socket.on('disconnect', function() {
      // console.log('Disconnected from Server.');
    })
  });

  afterEach(done => {
    if(socket.connected) {
      socket.disconnect();
    }
    done();
  });


  describe('Emit presence', () => {
    it('Emit 123', done => {
      socket.emit('presence', 123, response => {
        response.should.equal(123);
        done();
      });
    });

    it('Emit hello word', done => {
      socket.emit('presence', 'hello world', response => {
        response.should.equal('hello world');
        done();
      });
    });
  });
});