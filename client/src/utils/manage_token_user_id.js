import {
  setLocalStorageItem,
  getLocalStorageItem,
  clearLocalStorageItem,
} from "./local-storage";
import { generateTokenUserId, isTokenExpired, saveUserIDToRedis } from "./api";

// const { render_no_upload_status } = require('./render_upload_status');
// const { hide_stats } = require('./render_student_stats');

export const validateToken = async () => {
  console.log("validateToken = ");

  const localStorageKey = "attendance_token";
  let token = await getLocalStorageItem(localStorageKey);

  // if no token return undefined
  if (!token) {
    await generateToken();
    return undefined;
  }

  // if token check if expired; if expired return true
  if (token) {
    const isExpired = await isTokenExpired(token);

    console.log('manage token user id = ', isExpired);

    // if (isExpired) {    
    if (isExpired) {
      clearLocalStorageItem(localStorageKey);

      // clearChooseFileContent();
      // disableUploadButton();
      // render_no_upload_status();
      // hide_stats();
      // statusList = document.getElementById("status-list");
      // statusList.value = "";
      return true;
    }

    // await checkUserIDInRedis(token); // if user id not in redis, save to redis

    // else return false = token exists & is not expired
    return false;
  }
};

export const generateToken = async () => {
  const localStorageKey = "attendance_token";

  const initialToken = await generateTokenUserId();

  await setLocalStorageItem(localStorageKey, initialToken);

  await saveUserIDToRedis();

  return initialToken;
};
