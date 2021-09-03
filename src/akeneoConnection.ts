const http = require('http');
const tokenRefresh = require('./authenticate');

const req = http.request(
  tokenRefresh,
  (res: {
    statusCode: string;
    on: (arg0: string, arg1: (d: string) => void) => void;
  }) => {
    console.log(`statusCode: ${res.statusCode}`);
    res.on('data', (d: string) => {
      const obj = JSON.parse(d);
      console.log(obj);
    });
  }
);

req.on('error', (e: object) => {
  console.error(e);
});
req.end();

module.exports = req;
