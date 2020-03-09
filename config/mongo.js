const mongoose = require('mongoose');
const _=require('lodash');

require('dotenv').config();

const connection ={
    database:{
        host : _.get(process.env,'DATABASE_HOST'),
        port : _.get(process.env, 'DATABASE_PORT'),
        name : _.get(process.env, 'DATABASE_NAME')
    },
    username : _.get(process.env, 'DATABASE_USERNAME'),
    password : _.get(process.env, 'DATABASE_PASSWORD')
}

const { username, password, database }= connection;

const db = `mongodb://${username}:${password}@${database.host}:${database.port}/${database.name}`;
mongoose.connect(db)
    .then((con) => {
        console.log('MongoDB: Success connect')
    }).catch(err => {
        console.log(err)
    })
