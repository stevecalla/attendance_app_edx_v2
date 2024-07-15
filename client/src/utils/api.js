import { getLocalStorageItem } from "./local-storage";

// SECTION FETCH USER ID / TOKEN = GET
export const generateTokenUserId = async () => {
  try {
    const response = await fetch(`/api/user-id`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.token;
  } catch (error) {
    console.error("Error fetching user ID:", error);
    throw error;
  }
};

// SECTION FETCH IS TOKEN EXPIRED = GET
export const isTokenExpired = async () => {
  const token = await getLocalStorageItem("attendance_token");

  try {
    const response = await fetch(`/api/auth`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const isExpired = await response.json();
    return isExpired;
  } catch (error) {
    console.error("Error verifying if token is expired:", error);
    throw error;
  }
};

// SECTION SAVE TOKEN TO REDIS = POST
export const saveUserIDToRedis = async () => {
  const token = await getLocalStorageItem("attendance_token");

  try {
    const saveResponse = await fetch(`/api/user-id/save`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    });

    if (!saveResponse.ok) {
      throw new Error(`HTTP error! status: ${saveResponse.status}`);
    }
    
    return saveResponse;
  } catch (error) {
    console.error("Error saving user ID to Redis:", error);
    throw error;
  }
}

// SECTION SAVE FILE UPLOAD CONTENT = POST
export const saveFileContentRoute = async (fileContent, route) => {
  const token = await getLocalStorageItem("attendance_token");

  try {
    const response = await fetch(`/api/${route}`, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
        Authorization: `Bearer ${token}`,
      },
      body: fileContent,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response;
  } catch (error) {
    console.error("Error executing function:", error);
  }
};

// SECTION FETCH STUDENT ROSTER = GET
export const getStudentRoster = async () => {
  const token = await getLocalStorageItem("attendance_token");

  try {
    const response = await fetch(`/api/students`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error("Error executing function:", error);
  }
};

// SECTION FETCH ATTENDANCE = GET
export const getAttendanceResults = async () => {
  const token = await getLocalStorageItem("attendance_token");

  try {
    const response = await fetch("/api/attendance", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return data.result;
  } catch (error) {
    console.error("Error executing function:", error);
  }
};