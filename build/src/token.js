"use strict";
/*
import axios from "axios";

const data = JSON.stringify({
    grant_type: process.env.GRANT_TYPE,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
});

const option = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + process.env.CLIENT_ID + ':' + process.env.SECRET,
    }
}

axios.post('http://' + process.env.HOST + ':' + process.env.PORT + '/api/oauth/v1/token', data, option)
    .then((res) => console.log(res));

module .exports = axios;

 */
const jwt = require('jsonwebtoken');
// users hardcoded for simplicity, store in a db for production applications
const option = [{ client_id: process.env.CLIENT_ID, username: process.env.USERNAME, password: process.env.PASSWORD }];
module.exports = {
    authenticate,
    getAll
};
async function authenticate(username, password) {
    const user = option.find(u => u.username === username && u.password === password);
    if (!user)
        throw 'Username or password is incorrect';
    // create a jwt token that is valid for 7 days
    const token = jwt.sign({ sub: process.env.CLIENT_ID }, process.env.SECRET, { expiresIn: '7d' });
    return {
        ...omitPassword(option),
        token
    };
}
async function getAll() {
    return option.map(u => omitPassword(u));
}
// helper functions
function omitPassword(option) {
    const { password, ...userWithoutPassword } = option;
    return userWithoutPassword;
}
//# sourceMappingURL=token.js.map