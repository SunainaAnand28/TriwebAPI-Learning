import express from 'express';

// const userRouters = require('./routers/user');

import userRouters from './routers/user';
const app = express();

app.get('/', (req, res) => {
    res.send('Hi, i am the root of the server')
})

app.use('/user', userRouters);


app.listen(process.env.PORT);