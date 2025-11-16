const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_DB_URL).then(() => {
    console.log('Connected to MongoDB successfully');
}).catch((err) => {
    console.error('Failed to connect to MongoDB', err);
});