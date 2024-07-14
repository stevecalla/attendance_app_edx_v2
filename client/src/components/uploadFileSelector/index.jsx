import { useState, useRef, useEffect } from "react";

import { readCSVFile } from "../../utils/readCSVFile";
import { validateCSVContent } from "../../utils/validateCSVContent";

function UploadFileSelector({ setIsDisabled, setSelectedFiles, selectedFiles }) {
  const fileInputRef = useRef(null);
  const [alertStyle, setAlertStyle] = useState(true);

  useEffect(() => {
    console.log(selectedFiles);
    console.log('ref = ', fileInputRef);
    console.log('ref current = ', fileInputRef.current);
    console.log('ref value = ', fileInputRef.current.value);
  // C:\fakepath\zoomus_meeting_report_99367572825.csv
  // C:\fakepath\student_roster_06-01-2024_13_57_58_MDT.csv
  }, [ fileInputRef, selectedFiles ]);

  const handleSelectFile = async (event) => {
    // const token = await manageTokenUserId();

    const files = event.target.files;

    // Check if files were selected
    if (files?.length > 0) {
      const filesArray = Array.from(files); // Convert FileList to array
      setSelectedFiles(filesArray);

      // await logPageEvent(event, token);

      for (const file of filesArray) {
        let csvContent = await readCSVFile(file); // get content
        console.log(csvContent);

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
    // handle validation
    if (isValidFileContent) {
      setIsDisabled(false);
    } else {
      // Show invalid file alert and reset after 2 seconds
      setAlertStyle(false);

      setTimeout(() => {
        alert("File content is invalid.\n\nPlease select a valid file.");
      }, 200);

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

  // Conditional style for the file name
  const fileNameStyle = {
    color: alertStyle ? "initial" : "red", // Set text color to red if isValidFileContent is false
  };

  return (
    <input
      ref={fileInputRef} // Used to clear the file name
      className="form-control"
      name="fileName"
      onChange={handleSelectFile}
      type="file"
      placeholder="fileName"
      style={fileNameStyle}
    ></input>
  );
}

export default UploadFileSelector;
