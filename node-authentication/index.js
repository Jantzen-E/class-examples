const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const secretKey = fs.readFileSync('secret256.key');

const saltRounds = 10;
const app = express();

app.use(bodyParser.json());

const users = {};

app.post('/register', (req, res) => {
    const body = req.body;
    const username = body.username;
    const password = body.password;

    if (!username || !password) {
        res.status(400).send('Username or password missing!'); 
        return;
    }

    if (users[username]) {
        res.send('Username already taken.');
        return;
    }
    
    bcrypt.hash(password, saltRounds, (error, hashedPassword) => {
        if(error) {
            res.status(500).send('password failed to hash');
            return;
        }
        
        users[username] = hashedPassword;

        jwt.sign({ username }, secretKey, (error, token) => {
            if (error) {
                res.status(500).send('failed to create token');
                return;
            }
            res.send(token);
        });
        // res.send(hashedPassword);
    });
    
    // res.send('OK');
});

app.post('/login', (req, res) => {
    const body = req.body;
    const username = body.username;
    const password = body.password;

    if (!username || !password) {
        res.status(400).send('Username or password missing!');
        return;
    }

    if (!users[username]) {
        res.status(400).send('Username does not exist'); 
        return;
    }

    const hashedPassword = users[username];

    bcrypt.compare(password, hashedPassword, (error, isSame) => {
        if(error) {
            res.status(400).send('password incorrect');
            return;
        }

        if(isSame) {
            jwt.sign({ username }, secretKey, (error, token) => {
                if (error) {
                    res.status(500).send('failed to create token');
                    return;
                }
                res.send(token);
            });
        }
        else {
            res.send('failed to login');
        }
    });
});

app.get('/authenticatedData', (req, res) => {
    const authorization = req.headers.authorization;
    let token = '';

    if (authorization && authorization.split(' ')[0] === 'Bearer') {
        token = authorization.split(' ')[1];
    }

    jwt.verify(token, secretKey, (error, decodedToken) => {
        if (error) {
            // handle failed case
            res.send('token not valid');
            return;
        }

        res.send('the private data');
    });
});



app.listen(3000, () => {
    console.log('server started!!!!');
});

