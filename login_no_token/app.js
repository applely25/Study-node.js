const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan'); 
const cors = require('cors');
const router = require('./routes/user');
const { sequelize } = require("./models");

const app = express();
const PORT = process.env.PORT || 3000;

require('dotenv').config(); 

const corsOptions = {
  origin: '*',
  method: ['GET', 'POST', 'PATCH', 'DELETE'],
  credentials: true,
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));

app.use('/', router);
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.json({
        message : `Server  is running at ${PORT}`
    });
})

sequelize.sync({ force : false })
    .then(() => {
        console.log("database 연결 성공");
    })
    .catch((err) => {
        console.error(err);
    });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});