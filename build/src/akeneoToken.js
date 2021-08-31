"use strict";
/*const jwt = require('jsonwebtoken');
AuthenticateJWT(req, res, next){
    const authHeader = req.headers['authorization']
    if (authHeader == null) return
    next({status:401,message:'authorization missing'})
    jwt.verify(authHeader, Constant.ACCESS_TOKEN_SECRET,(err, user) =>
    {
      if (err) return next({status:403,message:err.message})
      req.user = user;
      next()
     })
   },

   require('crypto').randomBytes(32, function(err, buffer) {
    var ACCESS_TOKEN_SECRET = buffer.toString('hex');
    });
    app.get('/api/userOrders', AuthenticateJWT, (req, res) => {
        // executes after authenticateToken
        // ...
      })
//payload can be userID, email or other user details
function generateAccessToken(payload, ip_address) {
  return new Promise((resolve, reject) => {
    const tokens = {}; //generating acess token

    tokens.accessToken = jwt.sign(payload, Constant.ACCESS_TOKEN_SECRET, {
      expiresIn: '5m',
    }); //generating refresh token
    tokens.refreshToken = jwt.sign(payload, Constant.ACCESS_TOKEN_SECRET, {
      expiresIn: '6h',
    });
    resolve(tokens);
  });
}

var refreshTokens={};
//here userID is saved in payload of refresh token
refreshTokens[userId] = refreshToken;

//decode the JWT Token
var decoded = jwt.decode(JWTRefreshToken);
//check in temp location
if(refreshTokens[decoded.userid] === JWTRefreshToken)
// verify refresh token using jwt "AuthenticateJWT" function mentioned above and generate new access and refresh token for further use.
var decoded = jwt.decode(JWTRefreshToken);
delete refreshTokens[decoded.userid];*/
//# sourceMappingURL=akeneoToken.js.map