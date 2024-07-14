const dotenv = require("dotenv");
dotenv.config({ path: "../../.env" });

// console.log('process.env.NODE_ENV = ', process.env.NODE_ENV);
// console.log('process.env.REDIS_URL = ', process.env.REDIS_URL);

const { createClient } = require("redis");

// Initialize client.
let redisClient = '';

// const redisClient = createClient(); //original
if (process.env.NODE_ENV === 'development') {
  // Configure development-specific settings
  redisClient = createClient(process.env.REDIS_URL);
} else {
  // Configure production-specific settings
  redisClient = createClient({ url: process.env.REDIS_URL });
}

redisClient.on('connect', function() {
  console.log('Connected to Redis');
});

redisClient.on('error', function(err) {
  console.error('Error connecting to Redis:', err);
});

redisClient.connect().catch(console.error);

module.exports = redisClient;