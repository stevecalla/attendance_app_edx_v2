const dotenv = require('dotenv');
dotenv.config({ path: '../../../.env' });
const jwt = require('jsonwebtoken');
const decode = require('jwt-decode');

// using process env to align token & redis store expiration
// const expiration = `${process.env.EXPIRATION_HOURS}h`; // = 1 hour
const expiration = '1m';

async function signToken(user_id) {
  const payload = { user_id };

  let token = jwt.sign({ data: payload }, process.env.JWT_SECRET_KEY, { expiresIn: expiration });

  return token;
}

async function isTokenExpired(token) {
  let isExpired = false;

  const decoded = decode(token);
  const decodedExpiration = decoded.exp;
  const currentTimeStamp = Math.floor(Date.now() / 1000);

  if (decodedExpiration < currentTimeStamp) {
    isExpired = true;
  }

  return isExpired;
}

async function decodeToken(token) {

  const decodedToken = await decode(token);

  return decodedToken;
}

async function decodedTokenFormattedDateTime(token) {
  let { data: { user_id }, iat, exp } = token;
  iat = await localDateTime(iat);
  exp = await localDateTime(exp);

  const localDateTimeDecodedToken = {
    user_id,
    iat,
    exp
  };

  return localDateTimeDecodedToken;
}

async function splitBearerToken(token) {
  if (token.startsWith('Bearer ')) {
      return token.split(' ')[1];
  } else {
      return token;
  }
}

const verifyTokenMiddleware = async (req, res, next) => {
  // allows token to be sent via req.body, req.query, or headers
  let token = req?.body?.token || req?.query?.token || req?.headers?.authorization || req?.params?.token;

  if(!token || token === 'Bearer') {
    next();
  } else if (token) {
    token = await splitBearerToken(token);
    console.log('split token =', token);
  
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
      if (err) {
        if (err.name === 'TokenExpiredError') {
          console.log('Token expired');
          
          res.json(true);
          next();
  
        } else {
          return res.status(401).json({ err: err, errorName: err.name, error: 'Token verification failed' });
        }
      }
  
      req.user = decoded;
      console.log('Token verified successfully:');
      next();
    });
  }
};

async function localDateTime(unix_timestamp) {
  // Convert Unix timestamps to milliseconds
  const iatDate = new Date(unix_timestamp * 1000);

  // Convert to local time string representation
  const formattedTimestamp = iatDate.toLocaleString();

  return formattedTimestamp;
}

// const token = await signToken(1);
// const decodedToken = await decodeToken(token);
// await decodedTokenFormattedDateTime(token);

module.exports = {
  signToken,
  decodeToken,
  verifyTokenMiddleware,
  isTokenExpired,
}