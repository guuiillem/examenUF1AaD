const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');
const path = require('node:path');
app.use(express.json());
app.use(cors());



//Ex1
app.get('/llegirImatgesPujol', (res, req) => {
const readablestream = fs.createReadStream("C:\\UF1_ExamenAaD\\Imatges", {highWaterMark: 4096})

readablestream.on('data', (chunk) => {
console.log(chunk)
})

//Ex2

app.get('/mostraNomsPujol', (res,req) => {
  const directoriALlegir = ("C:\\UF1_ExamenAaD")
  fs.readdir(directoriALlegir, (err, files) => {
    files.forEach(file => {
      console.log(file)
    })
  })
})



})

const port = 3030;
app.listen(port, () => {
  console.log(`El servidor está escoltant per el port ${port}`);
});

