const EventEmitter = require('events');



const Logger = require('./logger');

const logger = new Logger();
logger.on('messageLogged', (arguments) => {
    console.log('listener called', arguments);
});


logger.log('message');




// const Raise = require('events');
// const raise = new Raise();

// raise.on('messageLogged', (arguments) => {
//     console.log('listener called', arguments);
// })

// raise.emit('messageLogged', { id: 1, url: 'http://' });
