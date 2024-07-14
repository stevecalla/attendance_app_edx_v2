import { useState, useRef, useEffect } from "react";

import {
  validateToken,
  generateToken,
} from "../../utils/manage_token_user_id.js";
import { readCSVFile } from "../../utils/readCSVFile";
import { validateCSVContent } from "../../utils/validateCSVContent";

function UploadFileSelector({
  setIsDisabled,
  setSelectedFiles,
  selectedFiles,
  isStudentFileUploaded,
  setIsStudentFileUploaded,
}) {
  const fileInputRef = useRef(null);
  const [alertStyle, setAlertStyle] = useState(true);

  useEffect(() => {
    if (isStudentFileUploaded) {
      fileInputRef.current.value = "";
      setSelectedFiles([]); // Clear selected files state
      setIsDisabled(true); // Disable the upload file button
    }
    setIsStudentFileUploaded(false);
  }, [
    setIsDisabled,
    selectedFiles,
    setSelectedFiles,
    isStudentFileUploaded,
    setIsStudentFileUploaded,
  ]);

  useEffect(() => {
    console.log(selectedFiles);
    console.log("ref = ", fileInputRef);
    console.log("ref current = ", fileInputRef.current);
    console.log("ref value = ", fileInputRef.current.value);
    // C:\fakepath\zoomus_meeting_report_99367572825.csv
    // C:\fakepath\student_roster_06-01-2024_13_57_58_MDT.csv
    // console.log('onclick event target files[0].name = ', event?.target?.files[0]?.name);
    // console.log('onclick fileInputRef.current.value = ', fileInputRef.current.value);
    // console.log('includes = ', fileInputRef.current.value.includes(event?.target?.files[0]?.name));
  }, [fileInputRef, selectedFiles]);

  const handleClick = async () => {
    // Setting fileInputRef.current.value = "" onClick ensures if the user clicks
    // the "Choose File" button for the same file consecutively React will execute
    // the related functions.
    fileInputRef.current.value = "";
    setSelectedFiles([]); // Clear selected files state
    setIsDisabled(true); // Disable the upload file button
  };

  const handleSelectFile = async (event) => {
    const isTokenExpired = await validateToken(); // ensure user-id/token is valid

    if (isTokenExpired) {
      await generateToken();
      fileInputRef.current.value = "";
      setSelectedFiles([]); // Clear selected files state
      setIsDisabled(true); // Disable the upload file button
      return;
    }

    const files = event.target.files;

    // Check if files were selected
    if (files?.length > 0) {
      const filesArray = Array.from(files); // Convert FileList to array
      setSelectedFiles(filesArray);

      // await logPageEvent(event, token);

      for (const file of filesArray) {
        let csvContent = await readCSVFile(file); // get content
        console.log("content = ", csvContent);

        // validate content
        let isValidFileContent = await validateCSVContent(csvContent);

        handleValidation(isValidFileContent);
      }
    } else {
      setSelectedFiles([]);
      setIsDisabled(true); // if user clicks the choose file button but then clicks cancel disable the upload button
    }
  };

  const handleValidation = (isValidFileContent) => {
    if (isValidFileContent) {
      setIsDisabled(false);
    } else {
      // Apply alert style to the file name
      setAlertStyle(false);

      // Show invalid file alert
      setTimeout(() => {
        alert("File content is invalid.\n\nPlease select a valid file.");
      }, 200);

      // Reset after 2 seconds
      setTimeout(() => {
        setAlertStyle(true);

        // Reset the file input by clearing its value
        if (fileInputRef.current) {
          fileInputRef.current.value = ""; // Clear file input value
        }
        setSelectedFiles([]); // Clear selected files state
      }, 2000);
    }
  };

  // Conditional style for the file name if invalid file selected
  const fileNameStyle = {
    color: alertStyle ? "initial" : "red", // Set text color to red if isValidFileContent is false
  };

  return (
    <input
      ref={fileInputRef} // Used to clear the file name
      className="form-control"
      name="fileName"
      onClick={handleClick}
      onChange={handleSelectFile}
      type="file"
      placeholder="fileName"
      style={fileNameStyle}
    ></input>
  );
}

export default UploadFileSelector;
