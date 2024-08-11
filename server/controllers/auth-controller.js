const { isTokenExpired } = require('../utilities/auth');

// /auth
async function isExpired(req, res) {
  
  console.log('auth controller');
  
  try {
    
    const token = req?.body?.token || req?.query?.token || req?.headers?.authorization || req?.params?.token;
    
    // retrieve from redis
    const isExpiredResult = await isTokenExpired(token);
    
    // /auth route returns false if not expired
    if(isExpiredResult === false) {
      res.json(isExpiredResult);
    }
  
    // the "verifyTokenMiddleware" middleware returns true if expired so this is handled earlier to check all api calls

  } catch (error) {
    console.error("Error executing function:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  isExpired
}


