require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fileupload = require('express-fileupload');
const sequelize = require('./db');
const PORT = process.env.PORT || 5000;
const models = require('./models/models');
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileupload({}));
app.use('/api', router);

//Обработка ошибок
app.use(errorHandler);

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log(`Server succesfully started on port ${PORT}`));
    } catch(e) {
        console.log(e)
    }
}

start();
