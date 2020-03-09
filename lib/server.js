const Authorization = require('../config/jwt');
const cors = require('cors')

const server ={

    start: function(app,loader,port){
        const swaggerUi = require('swagger-ui-express');
        const swaggerDocument = require('./swagger.json');

        return new Promise((resolve,reject)=>{
            app.use(cors)
            app.use((err, req, res, next) => {
                res.header("Access-Control-Allow-Origin", "*");
                res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
                res.header("Access-Control-Allow-Headers", "Content-Type");
                if(err) throw new Error(err)
                else next();
            });

            app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
            app.use(Authorization)
            

            app.use('/docs', swaggerUi.serve);
            app.get('/docs', swaggerUi.setup(swaggerDocument));


            console.log(`Running Port : ${port}\nAutoloader running:`);
            loader.modules.map((value,key) => {
                var src = require(`./../../../${loader.dir}/${value}/index`);
                try{
                    app.use(`/api/${loader.version}/${value}`, src);
                    console.log(`* /api/${loader.version}/${value} -> router:run`);
                    
                    resolve(`\nAutoloader: active`);
    
                }catch(err){
                    console.log(`* /api/${loader.version}/${value} -> router Error:\n${err}`);
                    reject(`Error : ${err}`);
                }
            })
        })
    }
}


module.exports= server;