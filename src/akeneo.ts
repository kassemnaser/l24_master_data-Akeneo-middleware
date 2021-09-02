const http = require('http');
require('dotenv').config();
//const request = require('request');
const options = {
  method: 'POST',
  host: process.env.HOST,
  port: process.env.PORT,
  path: '/api/rest/v1/products/',
  headers: {
    'Authorization':
      'Bearer Y2U2MGU0ZGQ4NjAxMWJmNWM2MWY5ZmIzYjM5MTVhMTY1ZjlmN2RlMGU0ZDFlOWMyNDlhNmJjMjk3Njk0NzhmNg',
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  form: {
    grant_type: process.env.grant_type,
    username: process.env.username,
    password: process.env.password,
  },
};
http.request(options, (error: any, response: any) => {
  if (error) throw new Error(error);
  console.log('response.body');
});
module.exports = http;
