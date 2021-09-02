const http = require('http');
require('dotenv').config();
//const request = require('request');
const options = {
  method: 'GET',
  host: process.env.host,
  port: 8080,
  path: '/api/rest/v1/products/',
  headers: {
    'Authorization':
      'Bearer M2ExN2I5MGNiOGE5YzgzYzNiYzQ3OTQ3YjUzNmY2N2E3ZDI5OTdjYTNjNmMwNDM5ZjJjZGRkYzg1MTlmMDUzNg',
    'Content-Type': 'application/x-www-form-urlencoded',
    Cookie: 'BAPID=ej4k1m2mv5i9frfvrc05l9v5pj',
  },
  form: {
    grant_type: process.env.grant_type,
    username: process.env.username,
    password: process.env.password,
  },
};
const req = http.request(options, (error: any, response: any) => {
  if (error) throw new Error(error);
  console.log(response.body);
});

module.exports = req;
