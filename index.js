const mongo = require('./config/mongo');
const mysql = require('./config/mysql');
const server = require('./lib/server');
const express = require('express');
const defApp = express();

module.exports ={

    start: function(app = defApp,loader,port){
        return new Promise((resolve,reject)=>{
            server.start(app,loader,port).then((result) => {
                resolve(result);
            }).catch((err) => {
                reject(err);
            });;
        })
        
    },
    mysql

}