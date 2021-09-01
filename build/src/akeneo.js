"use strict";
/*const http = require('http');
import fetch from 'node-fetch';
import btoa from 'btoa';

async function authenticate(this: any) {
  const json = await fetch('10.0.55.77:8080/api/oauth/v1/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'Basic ' +
        btoa(
          'OF80MjFqcDFvMjZ0a3djODBnczAwMGdjZ2tjNG9rOHcwZ2tnd3M0MGc0Z2NzMHM4Y293dzoxYXVjYzJmb21oeGN3Z29vdzhjNDg0b2NjNGdzZ2dnc3djazA4NDQ4dzRjc2NjODA0Zw=='
        ),
    },
    body: JSON.stringify({
      username: 'l24_master_dataconnector_9892',
      password: '2b78612b7',
      grant_type: 'password',
    }),
  })
    .then(res => {
      if (res.status === 200) {
        return res.json();
      } else {
        console.error(`Request returned status "${res.status}"`);
        return false;
      }
    })
    .catch(err => {
      console.error(err);
    });

  if (json !== false) {
    this.token = json.access_token;
    this.refreshToken = json.refresh_token;
    this.expiresAt = Date.now() + json.expires_in * 1000;
    console.debug('OAuth authentication successful');
    return true;
  } else {
    console.debug('OAuth authentication failed');
    return false;
  }
}
authenticate();
*/
//# sourceMappingURL=akeneo.js.map