const express = require('express');
const os = require("os");

const app = express();

app.get('/', (req, res) =>  {  
   console.log(`Hello from [${os.hostname()}]!`);
   res.send(os.hostname());
});

app.listen(3000, () => console.log(`${os.hostname()} listening on port 3000!`));