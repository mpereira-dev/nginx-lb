/**
 * A simple Express app which listens on port 3000.
 */
const express = require('express');
var cookieSession = require('cookie-session')
const os = require("os");

const app = express();

/**
 * The USE_SESSION variable allows you to enable or disable sessions.
 * This is useful for testing out how the PCF router handles load balancing and session affinity across multiple app instances.
 * Both USE_SESSION and SESSION_COOKIE_NAME are exposed in the manifest.yml > env. 
 * This enables you to configure these values dynamically via PCF.
 */
if(process.env.USE_SESSION === true || process.env.USE_SESSION === 'true'){
   const cookieName = process.env.SESSION_COOKIE_NAME || 'JSESSIONID'
   console.log(`[INFO] Enabling cookie based sessions. Cookie name [ ${cookieName} ].`);
   app.use(cookieSession({
      name: cookieName,
      keys: [ 'keyboard cat' ],
      // Cookie Options
      maxAge: 24 * 60 * 60 * 1000 // 24 hours
   }))
}

/**
 * This request handler at the root context just returns a hello with the hostname.
 * You can see the host name changing as you hit localhost:8080 depending on which server the request was forwared to.
 */
app.get('/', (req, res) =>  {  
   if(!process.env.USE_SESSION || process.env.USE_SESSION === false || process.env.USE_SESSION === 'false'){
      console.log(`Hello from [${os.hostname()}]!`);
      res.send(`Hello from [${os.hostname()}]!`);
   } else {
      req.session.views = (req.session.views || 0) + 1
      console.log(`Hello from [${os.hostname()}]! You have visited [ ${req.session.views} ] times.`);
      res.send(`Hello from [${os.hostname()}]! You have visited [ ${req.session.views} ] times.`);
   }
});

// Startup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`${os.hostname()} listening on port ${PORT}!`));

// Display some useful environment variables for the application and any bound services.
console.log("[INFO] NodeJS Environment Variables");
console.log("----------------------------------------------------------------------------------");
console.log("[INFO] USE_SESSION",process.env.USE_SESSION);
console.log("[INFO] SESSION_COOKIE_NAME",process.env.SESSION_COOKIE_NAME);
console.log("[INFO] VCAP_APPLICATION",process.env.VCAP_APPLICATION);
console.log("[INFO] VCAP_SERVICES",process.env.VCAP_SERVICES);
console.log("----------------------------------------------------------------------------------");