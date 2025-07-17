const mongoose  = require("mongoose")

const taskSchema = new mongoose.Schema({
    task :"string",
})

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;