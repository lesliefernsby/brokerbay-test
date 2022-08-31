const express = require('express');
const cors = require('cors');
const app = express();

const PORT =  3000;

app.use(cors());
app.use('/users', require('./controllers/users.controller'));


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
