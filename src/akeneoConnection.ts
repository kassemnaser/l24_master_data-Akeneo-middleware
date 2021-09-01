const http = require('http');

const getheaders = {
  'Content-Type': 'application/json',
  // eslint-disable-next-line prettier/prettier
  'Authorization': 'Bearer Yzc5ZTNmOTJjMWU1YTA2NWI5OGQ5MGVhOGRmZGU3ZjYwODdlNDgyMDk1MzVjYTFiN2MwY2FlZDA4OTlmODM2Zg',
};

const options = {
  host: '10.0.55.77', // here only the domain name
  port: 8080,
  path: '/api/rest/v1/products/13620748', // the rest of the url with parameters if needed
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
