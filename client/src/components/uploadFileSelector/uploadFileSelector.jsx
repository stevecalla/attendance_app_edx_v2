import { useState, useEffect } from "react";

import {
  validateToken,
  generateToken,
} from "../../utils/manage_token_user_id.js";
import { readCSVFile } from "../../utils/readCSVFile";
import { validateCSVContent } from "../../utils/validateCSVContent";

function UploadFileSelector({
  setIsDisabled,
  setSelectedFiles,
  fileInputRef,
}) {
  const [alertStyle, setAlertStyle] = useState(true);

  // focuses the file selector element when page loads
  useEffect(() => {
    fileInputRef.current.focus();
  }, [fileInputRef])
  

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

    if (isTokenExpired === undefined) {
      await generateToken();
    }

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
