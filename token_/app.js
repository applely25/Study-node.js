const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sequelize } = require('./models');
const router = require('./routes/user');

const app = express();

const PORT = process.env.PORT || 8081;

require("dotenv").config();

app.use(cors());

app.set("jwt-secret", process.env.JWT_KEY);
app.set("refresh-secret", process.env.REFRESH_KEY);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use('/', router);

app.get('/', (req, res) => {
    res.json({
        message : `Server  is running at ${PORT}`
    });
})

sequelize.sync({force : false})
    .then(() => {
        console.log("database 연결 성공");
    })
    .catch((err) => {
        console.log(err);
    });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});