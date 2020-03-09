var mongoose = require('mongoose');

describe('Mongo', ()=>{
    describe('Connection', () => {
        it('should connect to database mongo server', (done) => {
            try{
                mongoose.connect(`mongodb://admin:admin123@ds123753.mlab.com:23753/staging-blogdev`);
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