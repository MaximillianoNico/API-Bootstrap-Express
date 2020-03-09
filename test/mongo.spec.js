var mongoose = require('mongoose');

describe('Mongo', ()=>{
    describe('Connection', () => {
        it('should connect to database mongo server', (done) => {
            try{
                mongoose.connect(process.env.MOCK_DB_MONGO);
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