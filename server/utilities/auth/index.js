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
  // Allows token to be sent via req.body, req.query, headers, or params
  let token = req?.body?.token || req?.query?.token || req?.headers?.authorization || req?.params?.token;

  if (!token || token === 'Bearer') {
    // Log incoming route details
    console.log('Incoming route:', req.originalUrl || req.url);
    console.log('Request method:', req.method);
    console.log(`!token || token === 'Bearer'`);
    // return res.status(400).json({ error: 'No token provided or invalid token format' });

    // return will exit this function since a token doesn't exist
    // next() will continue to the route; if /api/user-id a token will be created
    return next();
  }

  try {
    // Split the 'Bearer' prefix from the token if it's included
    token = await splitBearerToken(token);
    console.log('Split token =', token);

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
      if (err) {
        if (err.name === 'TokenExpiredError') {
          console.log('Token expired');
          
          // did not return 401 error because intention is to alert & reset rather than error
          return res.json(true);
          // return res.status(401).json({ error: 'Token expired' }); // Respond with 401 Unauthorized for expired tokens
        } else {
          return res.status(401).json({ error: 'Token verification failed', details: err }); // Respond with 401 for other errors
        }
      }

      req.user = decoded;
      console.log('Token verified successfully:');
      next(); // Proceed to the next middleware or route handler
    });
  } catch (error) {
    console.error('Error processing token:', error);
    res.status(500).json({ error: 'Internal Server Error' }); // Respond with 500 if there’s a server-side error
  }
};

// const verifyTokenMiddleware = async (req, res, next) => {
//   // allows token to be sent via req.body, req.query, or headers
//   let token = req?.body?.token || req?.query?.token || req?.headers?.authorization || req?.params?.token;

//   if(!token || token === 'Bearer') {
//     next();
//   } else if (token) {
//     token = await splitBearerToken(token);
//     console.log('split token =', token);
  
//     jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
//       if (err) {
//         if (err.name === 'TokenExpiredError') {
//           console.log('Token expired');
          
//           res.json(true);
//           next();
  
//         } else {
//           return res.status(401).json({ err: err, errorName: err.name, error: 'Token verification failed' });
//         }
//       }
  
//       req.user = decoded;
//       console.log('Token verified successfully:');
//       next();
//     });
//   }
// };

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