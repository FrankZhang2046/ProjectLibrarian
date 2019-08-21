const express = require('express');
const app = express();
const cors = require('cors');
//importing routes
const routes = require('./routes/index');
const loginRoutes = require('./routes/users');
//importing mongoose 
const mongoose = require('mongoose');

app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(express.json());
app.use('/', routes);
app.use('/users', loginRoutes);

app.listen(8080, console.log('server now listening on port 8080'));