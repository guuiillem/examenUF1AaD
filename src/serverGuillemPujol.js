const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');
const path = require('node:path');
const path2 = require('path')
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

  //Ex3

app.put('/writeBuffersPujol', (res, req) => {
const pathSenseBuffers = 'C:\\UF1_ExamenAaD\\Documents'
// const path = 'C:\\UF1_ExamenAaD\\Documents\\Buffers'
const nomCarpeta = 'Buffers'
const rutaCompleta = path.join(pathSenseBuffers, nomCarpeta)

  if(!fs.existsSync(rutaCompleta)){
    fs.mkdir(rutaCompleta, (err) => {
      if (err) {
        return console.error(err);
      }
      console.log('Directori creat a:', rutaCompleta);
    })
  }
})



})

const port = 3030;
app.listen(port, () => {
  console.log(`El servidor está escoltant per el port ${port}`);
});

