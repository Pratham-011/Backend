const connectToMongo = require('./db');
const express = require('express')
const path = require("path");

var cors = require('cors')

connectToMongo();
const app = express()
const port = 5000

app.use(cors())

app.use(express.json())

//Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.get("/", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "frontend", "build")));
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
  

app.listen(port, () => {
  console.log(`iNOteBook backend listening on port ${port}`)
})
