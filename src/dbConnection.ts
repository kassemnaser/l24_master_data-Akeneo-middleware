/*// include mysql module
import mysql = require('mysql');

// create a connection variable with the required details
const connection = mysql.createConnection({
  host: '172.17.0.3',
  user: 'root',
  password: 'Start2021',
  database: 'l24_master_data',
});

// if connection is successful
connection.connect((err: {stack: string}) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
*/
//const 

function authenticateToken(req: any, res: any, next: any) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token === null) return res.sendStatus(401);

  jwt.verify(
    token,
    process.env.ACCESS_TOKEN_SECRET,
    (err: string, user: string) => {
      console.log(err);
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    }
  );
}
