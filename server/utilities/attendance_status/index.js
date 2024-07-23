const stringSimilarity = require("string-similarity");
const { getFromRedis } = require('../../controllers/redis_store.js');

// FUZZY LOGIC MATCH COMPARING STUDENTS VS PARTICIPANTS
async function fuzzyLogicMatch(user_id, matchThreshold, minutesThreshold) {

  console.log('\n*******************');
  console.log('fuzzy logic match = ', user_id, matchThreshold, minutesThreshold);
  console.log('*******************\n');

  const maxSimilarityScores = [];
  let count = 0;

  // retrieve from redis
  let studentRoster = await getFromRedis(`${user_id}_students`);
  studentRoster = JSON.parse(studentRoster);

  let participantRoster = await getFromRedis(`${user_id}_participants`);
  participantRoster = JSON.parse(participantRoster);

  console.log('\n*******************');
  console.log(participantRoster);
  console.log('*******************\n');

  studentRoster?.forEach((student) => {
    count++;
    let maxSimilarityScore = 0;
    let duration = 0;
    let matchName = "";
    let isAMatchStatus = false;
    let isMinutesAboveThresholdStatus = false;

    participantRoster?.forEach(({ name: participantName, duration: participantDuration }) => {
      const similarity = stringSimilarity.compareTwoStrings(student, participantName);
      if (similarity > maxSimilarityScore) {
        maxSimilarityScore = similarity;
        matchName = participantName;
        duration = participantDuration;
        isAMatchStatus = similarity > matchThreshold ? true : false;
        isMinutesAboveThresholdStatus = duration > minutesThreshold ? true : false;
      }
    });

    maxSimilarityScores.push({
      index: count,
      name: student,
      matchName: matchName,
      maxSimilarityScore: `${(maxSimilarityScore * 100).toFixed(0)}%`,
      duration,
      matchThreshold,
      minutesThreshold,
      isAMatchStatus,
      isMinutesAboveThresholdStatus,
      isInAttendance: isAMatchStatus && isMinutesAboveThresholdStatus ? true : false,
    });
  });

  return maxSimilarityScores;
}

module.exports = {
  fuzzyLogicMatch,
};