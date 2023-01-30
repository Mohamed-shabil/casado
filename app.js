const express = require('express');
const app = express();




app.all('*',(req, res,next)=>{
  next(new AppError(`Cant find ${req.originalUrl} on this server`,404));
});
module.exports = app;
