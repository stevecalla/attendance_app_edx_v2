import { useState, useEffect } from "react";

import UploadFileSelector from "../uploadFileSelector/index.jsx";
import UploadFileButton from "../uploadFileButton";

function UploadFileContainer({ isStudentFileUploaded, setIsStudentFileUploaded }) {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    console.log(selectedFiles);
  }, [selectedFiles]);

  return (
    <div className="input-group mb-3">
      <UploadFileSelector
        setIsDisabled={setIsDisabled}
        selectedFiles={selectedFiles}
        setSelectedFiles={setSelectedFiles}
        isStudentFileUploaded={isStudentFileUploaded}
        setIsStudentFileUploaded={setIsStudentFileUploaded}
      />

      <UploadFileButton 
        isDisabled={isDisabled} 
        setIsDisabled={setIsDisabled}
        selectedFiles={selectedFiles} 
        setSelectedFiles={setSelectedFiles}
        setIsStudentFileUploaded={setIsStudentFileUploaded}
      />

    </div>
  );
}

export default UploadFileContainer;
