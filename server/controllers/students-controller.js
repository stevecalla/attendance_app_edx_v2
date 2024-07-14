const express = require('express');
const router = express.Router();

const { getFromRedis } = require("./redis_store.js"); // get data from redis store
const { storeStudentResults } = require("../utilities/store_data_in_redis/store_student_data.js");
const { get_user_id_from_header } = require('../utilities/manage_user_id');

// get, /api/students
async function getStudentById(req, res) {
  try {
    const user_id = await get_user_id_from_header(req);

    // retrieve from redis
    let result = await getFromRedis(`${user_id}_students`);

    result = JSON.parse(result);
    res.json({ result });

  } catch (error) {
    console.error("Error executing function:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// post, /api/students
async function saveStudents(req, res) {
  
  console.log('saveStudents = ', req.body);

  try {
    const user_id = await get_user_id_from_header(req);
    console.log(user_id);
    
    const fileContent = req.body;

    // Process / store the received data
    await storeStudentResults(fileContent, user_id);

    // Respond with a success message
    res.status(201).json({ message: 'Post created successfully', fileContent, user_id });

  } catch (error) {
    console.error("Error executing function:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getStudentById,
  saveStudents,
}
