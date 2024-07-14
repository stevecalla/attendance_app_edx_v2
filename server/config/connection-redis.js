import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

// import RedisStore from "connect-redis";
import { createClient } from "redis";

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

export { redisClient };