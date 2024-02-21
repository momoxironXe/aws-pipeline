const express = require('express');
const cors = require('cors');

const app = express()

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/cd', (req, res) => {
  res.send('Continues Integrations and Deployment Added')
})



app.listen(3000, () => {
  console.log(`Example app listening on port 3000`)
});