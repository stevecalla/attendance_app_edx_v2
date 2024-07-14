const Papa = require("papaparse");
const { saveInRedis } = require("../../controllers/redis_store.js");

// STEP #1: CONVERTS TEXT / CSV FORMAT TO ARRAY WITH WITH EACH ELEMENT
function storeStudentResults(fileContent, user_id) {
  try {
    return new Promise((resolve, reject) => {

      Papa.parse(fileContent, {
        header: true,
        dynamicTyping: true,
        complete: function (results) {
          sortResults(results.data, user_id);
          resolve(results.data);
        },
        error: function (error) {
          console.error("Error:", error);
          reject(error);
        },
      });

    });
  } catch (error) {
    console.log("parse error = ", error);
  }
}

// STEP #2: SORT RESULTS FROM A TO Z
function sortResults(parsedData, user_id) {
  let sortedResults = parsedData
    .filter((element) => typeof element.name === "string")
    .map((attendee) => attendee)
    .sort((a, b) => {
      const nameA = a.name || ""; //handles null values
      const nameB = b.name || ""; //handles null values
      return nameA.localeCompare(nameB);
  });
  removeKey(sortedResults, user_id);
}

// STEP #3: REMOVE THE NAME KEY
function removeKey(sortedResults, user_id) {
  let removedKey = sortedResults?.map(student => student.name);
  removeDuplicates(removedKey, user_id);
}

// STEP #4: REMOVE DUPLICATES
function removeDuplicates(removedKey, user_id) {    
  // Create a Set from the array to remove duplicates
  const uniqueItems = new Set(removedKey);

  // Convert the Set back to an array
  const uniqueResults = [...uniqueItems];

  storeStudents(uniqueResults, user_id);
}

// STEP #5: STORE STUDENT ROSTER
function storeStudents(uniqueResults, user_id) {
  let studentRoster = uniqueResults;

  saveInRedis(`${user_id}_students`, JSON.stringify(studentRoster));
}

module.exports = { storeStudentResults };
