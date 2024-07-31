const uuidv4 = require('uuid').v4;
const { saveInRedis } = require('../../controllers/redis_store.js');
const { current_utc_timestamp } = require('../date_time');

// Generate random user id; utilize user id as part of file name
async function generate_user_id() {
  const random_user_id = uuidv4();
  return random_user_id;
}

// save file name in redis with current date / time
async function save_to_redis(user_id) {
  const current_date_time = await current_utc_timestamp();
  saveInRedis(`${user_id}_userId`, current_date_time);
}

// get user id from request header
async function get_user_id_from_header(req) {
  // verifyTokenMiddleware attaches user_id to req via req.user
  const { user_id } = req?.user?.data;

  return user_id;
}

// async function test() {
//   const user_id = await generate_user_id();
//   console.log(user_id);
//   save_to_redis(user_id);
// }
// test();

module.exports = { 
  generate_user_id,
  save_to_redis,
  get_user_id_from_header,
};
