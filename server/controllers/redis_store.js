const dotenv = require("dotenv");
dotenv.config({ path: "../../.env" });

const redisClient = require("../config/connection-redis.js");
const { encrypt, decrypt } = require("../utilities/crypto.js");

async function saveInRedis(keyName, value) {
  // Conditionally adjust options
  const options = {};

  // using process env to align token & redis store expiration
  // TTL = time to live expiration
  const ttlHours = process.env.EXPIRATION_HOURS; // = 1
  const ttlMinutes = 60; // TTL duration in minutes
  const ttlSeconds = 60; // TTL duration in seconds

  // create expiration period
  const expiration_period = ttlHours * ttlMinutes * ttlSeconds; // = 1 hour
  options.expiration = expiration_period; // TTL in seconds

  const encryptedValue = await encrypt(value);
  const savedValue = process.env.NODE_ENV !== "development" ? encryptedValue : value;

  // Call redisClient.set with the adjusted options
  redisClient.set(
    keyName,
    savedValue,
    options.expiration ? { EX: options.expiration } : null,
    (error, reply) => {
      if (error) {
        console.error("Error saving data to Redis:", error);
        // Handle the error accordingly
        return;
      }
    }
  );
}

async function getFromRedis(keyName) {
  try {
    console.log("getFromRedis keyName", keyName);

    let result = await redisClient.get(keyName);

    console.log("getFromRedis result", result);

    // Conditionally decrypt and parse 'result' based on NODE_ENV
    if (result && process.env.NODE_ENV !== "development") {
      const decryptedResult = await decrypt(result);
      result = JSON.parse(decryptedResult);
    }

    return result;
  } catch (error) {
    console.log("Redis GET Error = ", error);
  }
}

async function clearSpecificRedisKeys(pattern) {
  try {
    const keysToDelete = await findExactRedisKey(`*${pattern}*`);

    if (keysToDelete.length === 0) {
      console.log(`No keys matching '${pattern}' found in Redis.`);
      return;
    }

    const results = [];
    for (const key of keysToDelete) {
      const result = await redisClient.del(key);
      results.push({ key, result });
      console.log(`Key '${key}' deleted from Redis. Result:`, result);
    }

    return results;
  } catch (error) {
    console.log("Redis DEL Error:", error);
  }
}

async function clearAllRedisKeys() {
  try {
    const keys = await redisClient.keys("*");

    if (keys.length === 0) {
      console.log("No keys found in Redis.");
      return;
    }

    const results = [];
    for (const key of keys) {
      const result = await redisClient.del(key);
      results.push({ key, result });
      console.log(`Key '${key}' deleted from Redis. Result:`, result);
    }

    return results;
  } catch (error) {
    console.log("Redis DEL Error:", error);
  }
}

async function findExactRedisKey(keyName) {
  try {
    const key = await redisClient.keys(keyName);

    if (key.length === 0) {
      console.log(`No keys matching '${keyName}' found in Redis.`);
      return [];
    }

    return key;
  } catch (error) {
    console.log("Redis KEYS Error:", error);
    return [];
  }
}

async function findAllInstancesOfSpecificRedisKey(keyName) {
  try {
    const keys = await redisClient.keys(`*${keyName}*`); // WITH WILDCARDS

    if (keys.length === 0) {
      console.log(`No keys matching '${keyName}' found in Redis.`);
      return [];
    }

    return keys;
  } catch (error) {
    console.log("Redis KEYS Error:", error);
    return [];
  }
}

async function findAllRedisKeys() {
  try {
    const keys = await redisClient.keys("*");

    if (keys.length === 0) {
      console.log("No keys found in Redis.");
    }

    console.log(keys);
    return keys;
  } catch (error) {
    console.log("Redis KEYS Error:", error);
    return [];
  }
}

// saveInRedis('test', 'test');
// findAllRedisKeys();
// findExactRedisKey("3e42afeb-9773-49e7-af08-0f99fd2a95f6");
// clearAllRedisKeys();
// clearSpecificRedisKeys("7196f43b-fa60-446d-88c7-f9ba02f20108");

module.exports = {
  saveInRedis,
  getFromRedis,
  clearSpecificRedisKeys,
  clearAllRedisKeys,
  findExactRedisKey,
  findAllInstancesOfSpecificRedisKey,
  findAllRedisKeys,
};
