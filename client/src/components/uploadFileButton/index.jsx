import { useEffect } from "react";

import {
  validateToken,
  generateToken,
} from "../../utils/manage_token_user_id.js";
import { readCSVFile } from "../../utils/readCSVFile";
import { saveFileContentRoute } from "../../utils/api";

import "./uploadFileButton.css";

function UploadFileButton({
  isDisabled,
  setIsDisabled,
  selectedFiles,
  setSelectedFiles,
  setIsStudentFileUploaded,
  setIsParticipantFileUploaded,
}) {
  
  useEffect(() => {
    console.log("button = ", selectedFiles);
  }, [selectedFiles]);

  // UPLOAD FILE
  const handleFileUpload = async (event) => {
    console.log("handleFileUpload = ", selectedFiles[0]);

    const isTokenExpired = await validateToken(); // ensure user-id/token is valid

    if (isTokenExpired === undefined) {
      await generateToken();
    }

    if (isTokenExpired) {
      await generateToken();
      setIsStudentFileUploaded(false); // clears fileInputRef.current.value = "";
      setSelectedFiles([]); // Clear selected files state
      setIsDisabled(true); // Disable the upload file button
      return;
    }

    let fileContent = "";
    const file = selectedFiles[0];

    if (selectedFiles?.length === 0) {
      alert("Please select a file");
      return;
    }

    fileContent = await readCSVFile(file);
    console.log("file content = ", fileContent);

    const route = await determineRoute(fileContent); // students or participants
    console.log("route = ", route);

    const response = await saveFileContent(fileContent, route);

    if (response && route === "students") {
      setIsStudentFileUploaded(true);
      setIsDisabled(true);
      setTimeout(() => {
        alert("Student roster saved successfully.");
      }, 200);
      return;
    }

    if (response && route === "participants") {
      setIsParticipantFileUploaded(true);
      setIsDisabled(true);
      setTimeout(() => {
        alert("Participants saved successfully.");
      }, 200);
      return;
    }
  };

  // CHECK IF FILE NAME INCLUDES ZOOM OR STUDENT TO DETERMINE PATH
  const determineRoute = async () => {
    let fileName = selectedFiles[0].name;

    let route = "";

    if (fileName.includes("zoomus")) {
      route = "participants";
    } else if (fileName.includes("student")) {
      route = "students";
    }

    return route;
  };

  const saveFileContent = async (fileContent, route) => {
    console.log("save file content = ", fileContent, route);
    try {
      const response = await saveFileContentRoute(fileContent, route);

      console.log("saveFileContentRoute route = ", response);

      if (response.ok) {
        return response.ok;
      } else {
        throw new Error("Failed to upload file.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert(
        "An error occurred while uploading the file.\n\nPlease upload the correct file format and content."
      );
    }
  };

  return (
    <label
      id="upload-button"
      className={`input-group-text ${
        isDisabled ? "custom-disable-upload-button" : ""
      }`}
      onClick={handleFileUpload}
    >
      Upload
    </label>
  );
}

export default UploadFileButton;
