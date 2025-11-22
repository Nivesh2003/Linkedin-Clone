const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const cors = require('cors')
require('dotenv').config();
require ('./connection')

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  credentials:true,
  origin:"http://localhost:5173"
}))

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

const messageRoute = require('./routes/message')
app.use('/api/message',messageRoute)

app.listen(port, () => {
  console.log('Server is running on port',port); 
});
