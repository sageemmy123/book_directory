const mongoose = require ('mongoose');
//var url = 'mongodb://localhost:27017/booksDB';
var url = 'mongodb+srv://sage1234:Sports123@mernappcluster.h7jvjn8.mongodb.net/mernapp';

const connection = mongoose.createConnection(url);

module.exports = connection;