// import btoa = require('btoa');
// import fetch from 'node-fetch';
// const tokenRefresh = require('./authenticate');

// async function authenticate() {
//   const json = await fetch(
//     'http://' +
//       process.env.HOST +
//       ':' +
//       process.env.PORT +
//       '/api/oauth/v1/token',
//     {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         // eslint-disable-next-line prettier/prettier
//         'Authorization':
//           'Basic ' + btoa(process.env.CLIENT_ID + ':' + process.env.SECRET),
//       },
//       body: JSON.stringify({
//         grant_type: process.env.GRANT_TYPE,
//         username: process.env.USERNAME,
//         password: process.env.PASSWORD,
//       }),
//     }
//   )
//     .then(res => {
//       if (res.status === 200) {
//         return res.json();
//       } else {
//         console.error(`Request returned status "${res.status}"`);
//         return false;
//       }
//     })
//     .catch(err => {
//       console.error(err);
//     });

//   if (json !== false) {
//     json.access_token;
//     json.refresh_token;
//     Date.now() + json.expires_in * 1000;
//     console.debug('OAuth authentication successful');
//     return true;
//   } else {
//     console.debug('OAuth authentication failed');
//     return false;
//   }
// }

// module.exports = authenticate();
