/**
 * A simple Express app which listens on port 3000.
 */

const express = require('express');
const os = require("os");

const app = express();

/**
 * This request handler at the root context just returns a hello with the hostname.
 * You can see the host name changing as you hit localhost:8080 depending on which server the request was forwared to.
 */
app.get('/', (req, res) =>  {  
   console.log(`Hello from [${os.hostname()}]!`);
   res.send(os.hostname());
});

// Startup
app.listen(3000, () => console.log(`${os.hostname()} listening on port 3000!`));