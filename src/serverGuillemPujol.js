const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');
app.use(express.json());
app.use(cors());



//Ex1
app.get('/llegirImatgesPujol', (res, req) => {
const readablestream = fs.createReadStream("C:\\UF1_ExamenAaD\\Imatges", {highWaterMark: 4096})

readablestream.on('data', (chunk) => {
console.log(chunk)
})






})

const port = 3030;
app.listen(port, () => {
  console.log(`El servidor está escoltant per el port ${port}`);
});

