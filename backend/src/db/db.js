const mongoose = require('mongoose');

const connectDb = ()=>{
    mongoose.connect('mongodb+srv://rohit:7290080590@todo.drqki83.mongodb.net/todo-data')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));
}

module.exports = connectDb;