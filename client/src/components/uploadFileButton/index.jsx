import { useState, useRef, useEffect } from "react";

import { readCSVFile } from "../../utils/readCSVFile";
import { saveFileContentRoute } from "../../utils/api";

import "./uploadFileButton.css";

function UploadFileButton({ isDisabled, setIsDisabled, selectedFiles }) {
  useEffect(() => {
    console.log("button = ", selectedFiles);
  }, [selectedFiles]);

  // UPLOAD FILE
  const handleFileUpload = async (event) => {
    console.log("handleFileUpload = ", selectedFiles[0]);

    // const token = await manageTokenUserId();

    let fileContent = "";
    const file = selectedFiles[0];

    if (selectedFiles?.length === 0) {
      alert("Please select a file");
      return;
    }

    fileContent = await readCSVFile(file);
    console.log("file content = ", fileContent);

    const route = await determineRoute(fileContent); // either /students or /pariticipants
    console.log("route = ", route);

    const token = "";
    const response = await saveFileContent(token, fileContent, route);

    let studentList = [];

    if (response) {
      // studentList = await render_student_roster(route, token);

      if (studentList?.length === 0) {
        alert('Please upload student roster before Zoom participants.');
        // clearChooseFileContent();
        // disableUploadButton();
        setIsDisabled(true);
        return;
      }

      if (studentList?.length > 0) {
        // await render_upload_status(route);
        // await render_student_stats(route, token);
        // clearChooseFileContent();
        // disableUploadButton();
        // await logPageEvent(event, token);

        setTimeout(() => {
          alert("File saved successfully.");
        }, 200);
      }

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

  const saveFileContent = async (token = "", fileContent, route) => {
    try {
      const response = saveFileContentRoute(token, fileContent, route);
  
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
  }

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
