const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({path:'./config.env'});

const DB =process.env.DATABASE.replace('<password>',process.env.DATABASE_PASSWORD);

mongoose.set('strictQuery', true);
mongoose.connect(DB,{
  useNewUrlParser:true
})
.then( ()=>{console.log('DB Connection Successful !');})   

const port = process.env.port || 3000;

const server = app.listen(port, ()=>{
    console.log(`listening on port ${process.env.PORT}`);
}); 