const express = require('express');
const app = express();
const cors = require('cors');

const mongoose = require('mongoose');

app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(express.json());

app.listen(8080, console.log('server now listening on port 8080'));