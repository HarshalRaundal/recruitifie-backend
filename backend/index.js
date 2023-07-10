const express = require('express')
const app = express()
const port = 5000
const cors = require("cors");
const bodyParser = require('body-parser');


// allow cross origin resourse sharing
app.use((req,res,next) => {
  res.setHeader('Access-Control-Allow-Origin' ,"http://localhost:3000");

  res.header(
    "Access-Control-Allow-Headers",
    "Origin , X-Requested-With, Content-Type , Accept"
  );
  
  next();
})

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

//routes
app.use('/api',require('./Routes/candidateProfile'));

app.get('/', (req, res) => {
  res.send('Hello World with nodemon!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
