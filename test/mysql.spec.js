const mysql = require('mysql');

describe('Mysql', ()=>{
    describe('Connection', () => {
        it('should connect to database mongo server', (done) => {
            try{
                const db = mysql.createConnection({
                    host: `${process.env.MYSQL_PORT}`,
                    user: `${process.env.USER_MYSQL}`,
                    password: `${process.env.USER_MYSQL}`,
                    database: `${process.env.DATABASE_NAME_MYSQL}`
                });
                
                db.connect();
                
                done();
            }catch(err){
                
            }
            
        })
        it('should return get collection', (done) => {
            
        })
        it('should return find collection', (done) => {
            
        })
    })
})