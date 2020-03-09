const mysql = require('mysql2');
const bluebird = require('bluebird');
const _ = require('lodash');
require('dotenv').config();

const db = mysql.createConnection({
	host: _.get(process.env, 'MYSQL_PORT'),
	user: _.get(process.env, 'USER_MYSQL'),
	password: _.get(process.env, 'PASSWORD_MYSQL'),
	database: _.get(process.env, 'DATABASE_NAME_MYSQL'),
	Promise: bluebird,
});

try{
	db.connect((err, con) =>{
		if (err) console.log(err);
		console.log("MySQL: Success connect");
	});
}
catch(err){
	console.log(`Error Mysql => ${err}`);
}


module.exports = db;
