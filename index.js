const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route to render the signup page
//use express router
app.use('/', require('./src/routes/index'));


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
