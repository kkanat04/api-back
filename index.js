const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3001;
const cors = require('cors')

app.use(bodyParser.json())

app.use(cors())

app.set('/static', express.static('public'))

app.use('/', require('./routes/index'))

const start = () => {
  try {
    app.listen(PORT, () => console.log(`start server ${PORT}`));
  } catch (err) {
    console.log(err);
  }
};

start()