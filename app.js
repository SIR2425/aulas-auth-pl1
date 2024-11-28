// environment vars
require('dotenv').config();

const express = require('express');

const app = express();
app.use(express.urlencoded({extended: true}));

const port = process.env.PORT || 3000;

const users = {
    user1 : 'password1',
    user2 : 'password2'
}

const loggedUsers = new Set();

app.get('/', (req, res) => {
    res.send('Hello, PL1!');
});

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    // const { username, password } = req.body;
    if(users[username] === password) {
        res.status(200).send('Login successful');
        loggedUsers.add(username);
        console.log(`User ${username} logged in`);
        console.log(`logged users : ${loggedUsers}`);
        console.log(loggedUsers);
    } else {
        res.status(401).send('Invalid credentials');
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

