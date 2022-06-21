const express = require('express');
const mongoose = require('mongoose');
const router = require('./Router/index');
const app = express();
const cors= require('cors');
const bodyparser = require('body-parser')

const port = process.env.PORT || 8555;
const hostname = 'localhost';

// const dbURL = 'mongodb://127.0.0.1:27017/zomato'

const serverDB = 'mongodb+srv://zomato_29:aw3eft6yji9@cluster0.eplrh.mongodb.net/zomato29DB?retryWrites=true&w=majority'

app.use(cors());
app.use(express.json());  //parsing the data
app.use('/', router);

mongoose.connect(serverDB)
    .then(res => {
        app.listen(port, () => {
            console.log(`Server is running at ${hostname}:${port}`);
        })
    })
    .catch(err => console.log(err));

  