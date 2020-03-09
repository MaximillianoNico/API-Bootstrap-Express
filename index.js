const mongo = require('./config/mongo');
const mysql = require('./config/mysql');
const server = require('./lib/server');

module.exports ={

    start: function(app,loader,port){
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