const http = require('http');
const getheaders = {
  'Content-Type': 'application/json',
  'Authorization':
    'Bearer ODk1ZWFhODhjYjNkNWU4YWNiNjYxOTJiODMxODEwZDJkYzlhOGU4MjY4NWJlMDg3ZDEwODA4MjE0ZjRmYTI3OQ',
};

const options = {
  host: '10.0.55.77', // here only the domain name
  // (no http/https !)
  port: 8080,
  path: '/api/rest/v1/products', // the rest of the url with parameters if needed
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
      const product = Object.entries(JSON.parse(d).values);
      console.info(product);
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

/*
const options = {
  hostname: '10.0.55.77',
  port: 8080,
  path: '/api/rest/v1/products',
  header: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ZWRiZTY0NzY4MmM1NzI2MmE4Yzc4M2NlZTc1M2I1MTBlYTQxNWVhZjdiMmNjOGI3YjczMmYwYjZkMzJiMDZiZA',
  },
  method: 'GET',
};

const req = http.request(
  options,
  (res: {
    statusCode: string;
    on: (arg0: string, arg1: (d: string) => void) => void;
  }) => {
    console.log(`statusCode: ${res.statusCode}`);

    res.on('data', (d: string) => {
      //const product = Object.entries(JSON.parse(d));
      //console.info(product);
      process.stdout.write(d);
    });
  }
);

req.on('error', (error: string) => {
  console.error(error);
});

req.end();
*/
