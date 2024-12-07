const express = require('express');
const bodyParser = require('body-parser');
const compilex = require('compilex');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


compilex.init({ stats: true }); 

app.post('/compile', (req, res) => {
  const code = req.body.code;
  const input = req.body.input || ''; 


  const envData = { OS: 'linux', cmd: 'gcc' };

 
  compilex.compileCPPWithInput(envData, code, input, (result) => {
    res.send(result); 
  });
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
