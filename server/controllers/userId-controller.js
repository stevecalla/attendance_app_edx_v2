const express = require('express');
const router = express.Router();

const { findExactRedisKey } = require("./redis_store.js");
const { signToken } = require('../utilities/auth');
const { generate_user_id, save_to_redis } = require('../utilities/manage_user_id');

// Define a GET route with a URL parameter
// get, /api/user-id/:token
async function getUserId(req, res) {
  // "/:token" is passed to verifyTokenMiddleware read as req?.params?.token
  // verifyTokenMiddleware attaches to req via req.user
  const { user_id } = req.user.data;

  const checkIfExistsInRedis = await findExactRedisKey( `${user_id}_userId`);
 
  // check if the user id exists in redis?
  if (!checkIfExistsInRedis.length) {
    res.json(false);
    return;
  }

  res.json(true);
};

// get, /api/user-id
async function createUserId(req, res) {
  try {

    // retrieve from redis
    const result = await generate_user_id();
    
    const token = await signToken(result);

    res.json({ token });

  } catch (error) {
    console.error("Error executing function:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// post, /api/user-id/save
async function saveUserId(req, res) {
  try {
    // verifyTokenMiddleware attaches to req via req.user
    const { user_id } = req?.user?.data;

    await save_to_redis(user_id);

    // Respond with a success message
    res.status(201).json({ message: 'Post created successfully', user_id });

  } catch (error) {
    console.error("Error executing function:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createUserId,
  getUserId,
  saveUserId,
}


