const stringSimilarity = require("string-similarity");
const { getFromRedis } = require('../../controllers/redis_store.js');

// FUZZY LOGIC MATCH COMPARING STUDENTS VS PARTICIPANTS
async function fuzzyLogicMatch(user_id) {
  const maxSimilarityScores = [];
  let count = 0;

  // retrieve from redis
  let studentRoster = await getFromRedis(`${user_id}_students`);
  studentRoster = JSON.parse(studentRoster);

  let participantRoster = await getFromRedis(`${user_id}_participants`);
  participantRoster = JSON.parse(participantRoster);

  studentRoster?.forEach((student) => {
    let maxSimilarityScore = 0;
    let matchName = "";
    count++;
    let duration;

    participantRoster?.forEach((participant) => {
      const similarity = stringSimilarity.compareTwoStrings(student, participant.name);
      if (similarity > maxSimilarityScore) {
        maxSimilarityScore = similarity;
        matchName = participant.name;
        duration = participant.duration;
      }
    });

    maxSimilarityScores.push({
      index: count,
      name: student,
      matchName: matchName,
      maxSimilarityScore,
      duration: duration,
    });
  });

  return maxSimilarityScores;
}

module.exports = {
  fuzzyLogicMatch,
};