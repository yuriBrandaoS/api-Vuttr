const app = require('./config');
const server = require('http').Server(app);
const port = 3000;

server.listen(port, () => 
console.log(`Server started at port ${port}`));