const express = require ('express');
const morgan = require ('morgan');
const app = express();

//setings
app.set('port', process.env.PORT|| 3000);
//mongose


const indexRouters = require('./src/routers/index');
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/',indexRouters);



app.use(morgan('dev'));

app.listen(app.get('port'),() =>{
    console.log(`Server on port ${app.get('port')}`);
})
