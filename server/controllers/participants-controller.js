// const express = require('express');
// const router = express.Router();

const { getFromRedis } = require("./redis_store.js"); // get data from redis store
const { storeParticipantResults } = require("../utilities/store_data_in_redis/store_participant_data.js");
const { get_user_id_from_header } = require('../utilities/manage_user_id');

// get, /api/participants
async function getParticipantsById(req, res) {
  try {
    const user_id = await get_user_id_from_header(req);

    let result = await getFromRedis(`${user_id}_participants`);

    result = JSON.parse(result);
    res.json({ result });
    
  } catch (error) {
    console.error('Error executing function:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// post, /api/participants
async function saveParticipants(req, res) {
  try {  
    const user_id = await get_user_id_from_header(req);

    const fileContent= req.body;
  
    // Process / store the received data
    await storeParticipantResults(fileContent, user_id);

    // Respond with a success message
    res.status(201).json({ message: 'Post created successfully', fileContent, user_id });

  } catch (error) {
    console.error('Error executing function:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getParticipantsById,
  saveParticipants,
}
