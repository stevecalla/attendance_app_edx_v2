const express = require('express');
const router = express.Router();
const { isTokenExpired } = require('../utilities/auth');

// /auth
// middleware "verifyTokenMiddleware" returns true if expired
// /auth route returns false if not expired
async function isExpired(req, res) {

  console.log('auth controller');
  
  try {

    const token = req?.body?.token || req?.query?.token || req?.headers?.authorization || req?.params?.token;
    
    // retrieve from redis
    const isExpiredResult = await isTokenExpired(token);

    if(isExpiredResult === false) {
      res.json(isExpiredResult);
    }

  } catch (error) {
    console.error("Error executing function:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  isExpired
}


