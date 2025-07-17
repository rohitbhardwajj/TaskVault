// index.js
const express = require('express');
const connectDb = require('./src/db/db');
const TaskAdd = require('./src/db/models/Task.model'); // Remove .jsx
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors()); 
connectDb();

app.post('/', async (req, res) => {
    const { task } = req.body;
    TaskAdd.create({ task })
        .then(() => res.status(201).send('Task added successfully'))
        .catch(err => res.status(500).send('Error adding task: ' + err.message));
});

app.get('/' , async (req , res) =>{
    TaskAdd.find({})
        .then(tasks => res.status(200).json(tasks))
        .catch(err => res.status(500).send('Error fetching tasks: ' + err.message));
})

app.listen(3000, () => {
    console.log('server is running on port 3000');
});
