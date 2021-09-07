require('dotenv').config();
const request = require('request');

class Akeneo {
  expiresAt = 0;
  accessToken = '';
  constructor(expiresAt: number) {
    this.expiresAt = expiresAt;
  }

  async connect() {
    if (this.expiresAt > Date.now()) {
      await this.authenticate();
    }
  }

  async authenticate() {
    const options = {
      method: 'POST',
      url: 'https://' + process.env.HOST + ':' + process.env.PORT + '/api/oauth/v1/token',
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
      //console.log(response.body);
      this.expiresAt = Date.now() + 60 * 1000;
    });
  }
}

module.exports = Akeneo;
