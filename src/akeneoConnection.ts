const http = require('http');

const getheaders = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer N2ZmMGM0OGM4NTk1MTczYjlmZTI2NTExODM5ZGE1ZDFkOGRiYjkwZjA1YWQ5Y2RkYzY3ZmVmOTNmMmVkODhiNg',
};

const options = {
  host: '10.0.55.77', // here only the domain name
  port: 8080,
  path: '/api/rest/v1/products/10977324', // the rest of the url with parameters if needed
  headers: getheaders,
  method: 'GET', // do GET
};
const req = http.request(
  options,
  (res: {
    statusCode: string;
    on: (arg0: string, arg1: (d: string) => void) => void;
  }) => {
    console.log(`statusCode: ${res.statusCode}`);
    res.on('data', (d: string) => {
      const obj = Object.entries(JSON.parse(d).values);
      console.info(obj);
      //console.log(d);
      //process.stdout.write(d);
    });
  }
);

req.on('error', (e: object) => {
  console.error(e);
});
req.end();
module.exports = req;
