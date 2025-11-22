const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
require('dotenv').config();
require ('./connection')

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());

//Routes
const userRoute = require('./routes/user')
app.use('/api/auth',userRoute)

const postRoute = require('./routes/post')
app.use('/api/post',postRoute)

const notifRoute = require('./routes/notification')
app.use('/api/notif',notifRoute)

const commentRoute = require('./routes/comment')
app.use('/api/comment',commentRoute)

const convoRoute = require('./routes/convo')
app.use('/api/convo',convoRoute)

app.listen(port, () => {
  console.log('Server is running on port',port); 
});
