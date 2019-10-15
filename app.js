const express=require('express');
const body_parser=require('body-parser');
const routes=require('./routes/mainRoutes');
const db=require('./model/mongoDb');
const app=express();

//middleware body-parser
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended:false}));

app.use('/',routes);

const PORT=process.env.PORT||3002;
app.listen(PORT,()=>console.log(`Server is up on port ${PORT}`));