const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const app = express();

//settings
app.set('port',process.env.port || 3000);

//middlewares: functions that get executed when a request occurs
app.use(morgan('dev'));
app.use(bodyParser.json());

//routes
require('./routes/userRoutes')(app);

//static files

//start server
app.listen(app.get('port'), ()=>{
  console.log('server on port 3000');
});
