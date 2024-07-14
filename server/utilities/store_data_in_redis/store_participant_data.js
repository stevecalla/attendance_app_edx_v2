import Papa from "papaparse";
import { saveInRedis } from "../redis_store.js";

// STEP #1: CONVERTS TEXT / CSV FORMAT TO ARRAY WITH WITH EACH ELEMENT
function parseParticipantResults(postData, user_id) {
  try {
    return new Promise((resolve, reject) => {
      Papa.parse(postData, {
        header: true,
        dynamicTyping: true,
        complete: function (results) {
          modifyKeys(results.data, user_id);
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

// STEP #1a: MODIFY KEYS
function modifyKeys(parsedData, user_id) {
  let parsedDataModifiedKeys = parsedData?.map((participant) => {
    return {
      name: participant["User Name"],
      email: participant["User Email"],
      joinTime: participant["Join time"],
      leaveTime: participant["Leave time"],
      duration: participant["Duration(Minutes)"],
    };
  });
  sortResults(parsedDataModifiedKeys, user_id);
}

// STEP #2: SORT RESULTS FROM A TO Z
function sortResults(parsedDataModifiedKeys, user_id) {
  let sortedResults = parsedDataModifiedKeys
    ?.filter((element) => typeof element.name === "string")
    ?.map((attendee) => attendee)
    ?.sort((a, b) => {
      const nameA = a.name || ""; //handles null values
      const nameB = b.name || ""; //handles null values
      return nameA.localeCompare(nameB);
    });
  sumDuration(sortedResults, user_id);
}

function sumDuration(sortedResults, user_id) {
  const result = sortedResults.reduce((acc, curr) => {
    const index = acc.findIndex((item) => item.name === curr.name);
    if (index === -1) {
      acc.push({ name: curr.name, duration: curr.duration });
    } else {
      acc[index].duration += curr.duration;
    }
    return acc;
  }, []);
  storeParticipants(result, user_id);
}

// STEP #5: STORE PARTICIPANT ROSTER
function storeParticipants(parsedResults, user_id) {
  let participantRoster = parsedResults;

  saveInRedis(`${user_id}_participants`, JSON.stringify(participantRoster));
}

export { parseParticipantResults };
