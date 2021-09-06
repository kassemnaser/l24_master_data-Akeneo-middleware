//const http = require('http');
require('dotenv').config();
//const request = require('request');

async function generateAccessToken() {
  const options = {
    method: 'POST',
    url:
      'http://' +
      process.env.HOST +
      ':' +
      process.env.PORT +
      '/api/oauth/v1/token',
    headers: {
      'Content-Type': 'application',
      // eslint-disable-next-line prettier/prettier
        'Authorization': 'Basic OF80MjFqcDFvMjZ0a3djODBnczAwMGdjZ2tjNG9rOHcwZ2tnd3M0MGc0Z2NzMHM4Y293dzoxYXVjYzJmb21oeGN3Z29vdzhjNDg0b2NjNGdzZ2dnc3djazA4NDQ4dzRjc2NjODA0Zw==',
    },
    form: {
      grant_type: process.env.GRANT_TYPE,
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
    },
  };

  request(options, (error: Error, response: any) => {
    if (error) throw error;

    const access_token = Object.entries(JSON.parse(response.body));
    console.info(access_token[0][1]);
    const expires_in = null;

    if (access_token !== expires_in) {
      null;
    }
    access_token;
  });
}

const accessToke = generateAccessToken();

module.exports = accessToke;
