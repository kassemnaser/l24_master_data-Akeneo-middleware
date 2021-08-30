"use strict";
/*const http = require('http');
const getheaders = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer ODE1ZWM4YmQyMzE2MzgzODhhOGViM2IyOTlkMmFmZDgxNzExOGQwOTI4NDM2ODM0MjVlMzZhOWQ5NjBkZjgzMA',
};

const options = {
  host: '10.0.55.77', // here only the domain name
  port: 8080,
  path: '/api/rest/v1/products', // the rest of the url with parameters if needed
  headers: getheaders,
  method: 'GET', // do GET
};
const req = http.request(
  options,
  (res: {
    statusCode: string;
    on: (arg0: string, arg1: (d: string) => void) => any;
  }) => {
    console.log(`statusCode: ${res.statusCode}`);
    res.on('data', (d: string) => {
      //console.log(d);
      process.stdout.write(d);
    });
  }
);

req.on('error', (e: object) => {
  console.error(e);
});
req.end();
module.exports = req;
*/ 
//# sourceMappingURL=akeneoConnection.js.map