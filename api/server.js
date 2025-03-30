const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
const mongoURI = "mongodb+srv://margotanimalguardian:MargotGuardian@cluster0.mrqh1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const mongoOptions = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect(mongoURI, mongoOptions)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.error(err));

// Define a Schema
const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true }
});

// Define a Model
const User = mongoose.model('User', UserSchema);

// API Routes
app.post('/api/saveUser', async (req, res) => {
    try {
        const { name, address } = req.body;
        if (!name || !address) {
            return res.status(400).send({ message: 'Name and address are required' });
        }
        let user = new User({ name, address });
        await user.save();
        res.send({ message: 'User saved successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
});

app.get('/api/getUsers', async (req, res) => {
    try {
        let users = await User.find().select('name address');
        res.send(users);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
});

// Start Server
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect("mongodb+srv://margotanimalguardian:MargotGuardian@cluster0.mrqh1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}).then(() => {
    console.log('MongoDB Connected...');
}).catch(err => console.log(err));

// Define a Schema
const UserSchema = new mongoose.Schema({
    name: String,
    address: String
});

// Define a Model
const User = mongoose.model('User', UserSchema);

// API Routes
app.post('/api/saveUser', async (req, res) => {
    try {
        let user = new User(req.body);
        await user.save();
        res.send({ message: 'User saved successfully' });
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get('/api/getUsers', async (req, res) => {
    try {
        let users = await User.find();
        res.send(users);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Start Server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
