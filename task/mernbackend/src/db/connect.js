const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

// const DB = process.env.DATABASE;

mongoose
    .connect("mongodb+srv://trehana12:6PwtVF80pxdQxDim@cluster0.ihhsqgj.mongodb.net/task?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    .then(() => console.log('DB connection successful!'));