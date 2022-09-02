const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const errorHandler = require('./helpers/error-handler');

const PORT =  3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());
app.use('/users', require('./controllers/users.controller'));
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
